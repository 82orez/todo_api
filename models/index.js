const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

// MAMP 를 설치한 경우, mysql 의 port 넘버는 8889번으로 변경되므로 포트 부분을 추가해 줌.
const sequelize = new Sequelize(config.database, config.username, config.password, { host: config.host, dialect: 'mysql', port: config.port });

// 연결 객체를 db 객체에 저장.
db.sequelize = sequelize;

// Sequelize 라이브러리 자체를 db 객체에 같이 저장. 이렇게 하면 테이블을 작성할 때 따로 Sequelize 라이브러리를 불러오지 않아도 됨.
db.Sequelize = Sequelize;

// 생성된 테이블들을 불러와서 연결 객체와 라이브러리 자체를 인수로 넣어 주고 db 객체에 저장.
db.TodoList = require('./todolist_model')(sequelize, Sequelize);

module.exports = db;
