const ProductDetails = (sequelize, DataTypes) => {
  const ProductDetails = sequelize.define("productDetails", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    colors: { type: DataTypes.ENUM, values: ["white", "black", "green"] },
    sizes: { type: DataTypes.ENUM, values: ["xl", "2xl", "3xl"] },
    condition: { type: DataTypes.STRING, allowNull: false },
    images: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  });
  return ProductDetails;
};

module.exports = ProductDetails;
