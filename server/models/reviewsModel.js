const Reviews = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("reviews", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    body: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
  });

  return Reviews;
};
module.exports = Reviews;
