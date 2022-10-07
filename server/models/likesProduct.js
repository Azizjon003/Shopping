const { DataTypes } = require("sequelize");
const { sequelize } = require("../configs/db");

const likes = (sequelize, DataTypes) => {
  const likes = sequelize.define("likes", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    productId: {
      type: DataTypes.UUID,
      refences: {
        model: "products",
        key: "id",
      },
    },
  });
};
