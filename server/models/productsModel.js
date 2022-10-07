const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("products", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 3,
        max: 250,
      },
    },
    image_main: { type: DataTypes.STRING, allowNull: false },
    sale_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "sales",
        key: "id",
      },
    }, //boshqa table
    reviews_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "reviews",
        key: "id",
      },
    }, //boshqa table
    detail_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "productDetails",
        key: "id",
      },
    }, //boshqa table
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
