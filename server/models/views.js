const views = (sequelize, DataTypes) => {
  const views = sequelize.define("views", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    views: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return views;
};
module.exports = views;
