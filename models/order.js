// const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
  orderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // orderDate: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  // },
  // totalAmount: {
  //   type: DataTypes.DECIMAL(10, 2),
  //   allowNull: false
  // },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users", // Name of the table that the foreign key refers to
      key: "userId", // Column name of the referenced key
    },
  },
});

Order.associate = function (models) {
  Order.belongsTo(models.User, { foreignKey: "userId", as: "user" });
};

module.exports = Order;
