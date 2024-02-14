// default 값으로 화살표 함수 내보내기.
// sequelize 는 연결 객체, DataTypes 부분은 Sequelize 라이브러리 자체를 넣어줘도 되지만 여기서는 데이터 타입을 결정한다는 의미로 이름을 DataTypes 로 바꿔줌.

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
