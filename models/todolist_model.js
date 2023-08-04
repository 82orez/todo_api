const DataTypes = require('sequelize');

// default 값으로 화살표 함수 내보내기.
module.exports = (sequelize) => {
  return sequelize.define(
    'TodoList',
    {
      isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdDate: {
        type: DataTypes.DATEONLY,
        // type: 'TIMESTAMP',
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
};
