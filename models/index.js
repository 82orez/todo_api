const Sequelize = require('sequelize');

// ! 개발 환경 설정하기.
// const env = process.env.NODE_ENV || 'development';
const env = process.env.NODE_ENV || 'production';

const config = require('../config/config.json')[env];

// MAMP 를 설치한 경우, mysql 의 port 넘버는 8889번으로 변경되므로 포트 부분을 추가해 줌.
const sequelize = new Sequelize(config.database, config.username, config.password, { host: config.host, dialect: 'mysql', port: config.port });

module.exports = {
  sequelize,
  // ./todolist_model.js 파일에서 default 값으로 내보내진 화살표 함수를 가져와서 sequelize 를 인자로 넘겨서 TodoList 키의 value 로 할당.
  TodoList: require('./todolist_model')(sequelize),
};

