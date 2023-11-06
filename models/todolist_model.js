// default 값으로 화살표 함수 내보내기.
// sequelize 는 연결 객체, DataTypes 는 Sequelize 라이브러리 자체를 의미.

module.exports = (sequelize, DataTypes) => {
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
