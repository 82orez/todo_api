const DataTypes = require('sequelize');

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
