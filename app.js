// ! 먼저 models/index.js 파일에서 의 개발 환경 설정 필요.

/* eslint-disable no-constant-condition */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize } = require('./models');
const { getAll, insert, remove, update } = require('./controllers/todolist.controller');

const launchServer = async () => {
  const app = express();
  app.use(express.json({ strict: false }));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(cors());

  // ! React 배포 부분.
  app.use('/', express.static(`${__dirname}/build`));

  app.get('/', (req, res) => {

    if (`${__dirname}/build/index.html`) {
      res.sendFile(`${__dirname}/build/index.html`);
    }
    res.send('No index.html exists!');
  });

  app.get('/todolist', getAll);
  app.post('/todolist', insert);
  app.delete('/todolist', remove);
  app.put('/todolist', update);

  try {
    await sequelize.sync({ force: false });
    console.log('DB is ready!');
  } catch (e) {
    console.log('Unable to connect to DB!!');
    console.error(e);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }

  // eslint-disable-next-line no-undef
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Server is running on port ${port}`));
};

launchServer();

// http://localhost:8080/
// Sever 종료는 터미널에서 ctrl + C
