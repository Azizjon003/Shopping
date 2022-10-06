const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    image_main: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    sale_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    reviews_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    detail_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    brand_id: { type: DataTypes.STRING, allowNull: false }, //boshqa table
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
    },
    categoryLittleId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "categoryLittles",
        key: "id",
      },
    },
    viewsId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "views",
        key: "id",
      },
    },
  });
  return Products;
};

module.exports = Products;
