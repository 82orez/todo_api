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

  // app.get('/', (req, res) => {
  //   res.json({ message: 'Hello Todo' });
  // });

  app.get('/', getAll);
  app.post('/todolist', insert);
  app.delete('/todolist', remove);
  app.put('/todolist', update);

  try {
    await sequelize.sync({ force: false });
    console.log('DB is ready!');
  } catch (e) {
    console.log('Unable to connect to DB!!');
    console.error(e);
    process.exit(1);
  }

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Server is running on port ${port}`));
};

launchServer();

// http://localhost:8080/
// Sever 종료는 터미널에서 ctrl + C