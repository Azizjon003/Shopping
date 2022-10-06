const { Sequelize, DataTypes, Op } = require("sequelize");
const cli = require("cli-color");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "postgres", host: process.env.DB_HOST }
);
sequelize
  .authenticate()
  .then(() => {
    console.log(cli.blue("Postgresql connected succesfully"));
  })
  .catch((err) => {
    console.log(cli.red(err.message));
  });

let db = {};
db.sequelize = sequelize;
db.Op = Op;

db.basket = require("../models/basketsModel")(sequelize, DataTypes);

db.brands = require("../models/brandsModel")(sequelize, DataTypes);

db.categories = require("../models/categoriesModel")(sequelize, DataTypes);

db.locations = require("../models/locationsModel")(sequelize, DataTypes);

db.productDetails = require("../models/productDetailsModel")(
  sequelize,
  DataTypes
);

db.reviews = require("../models/reviewsModel")(sequelize, DataTypes);

db.sales = require("../models/salesModel")(sequelize, DataTypes);

db.services = require("../models/servicesModel")(sequelize, DataTypes);

db.servideTypes = require("../models/serviseTypesModel")(sequelize, DataTypes);

db.submitVacancies = require("../models/submitVacancyModel")(
  sequelize,
  DataTypes
);
db.users = require("../models/userModel")(sequelize, DataTypes);

db.vacancyCategories = require("../models/vacancyCategoryModel")(
  sequelize,
  DataTypes
);

db.vacancies = require("../models/vacancyModel")(sequelize, DataTypes);

db.worker = require("../models/workersModel")(sequelize, DataTypes);

db.categoryLittles = require("../models/categoryLittleModel")(
  sequelize,
  DataTypes
);
db.views = require("../models/views")(sequelize, DataTypes);

db.products = require("../models/productsModel")(sequelize, DataTypes);
// users bilan commentlar  qo'shilishi
db.users.hasOne(db.reviews, { onDelete: "CASCADE" });
db.reviews.belongsTo(db.users, { onDelete: "CASCADE" });
// users bilan commentlar qo'shilishi

// userlarning elonlari qo'shilishi
db.users.hasOne(db.submitVacancies, { onDelete: "CASCADE" });
db.submitVacancies.belongsTo(db.users, { onDelete: "CASCADE" });
// userlarning  elonlari qo'shilishi

db.vacancies.hasOne(db.submitVacancies, { onDelete: "CASCADE" });
db.submitVacancies.belongsTo(db.vacancies, { onDelete: "CASCADE" });

db.locations.hasOne(db.users, { onDelete: "CASCADE" });
db.users.belongsTo(db.locations, { onDelete: "CASCADE" });

db.vacancyCategories.hasOne(db.vacancies, { onDelete: "CASCADE" });
db.vacancies.belongsTo(db.vacancyCategories, { onDelete: "CASCADE" });

db.categories.hasMany(db.categoryLittles);
db.categoryLittles.belongsTo(db.categories);
// db.sequelize
//   .sync({ alter: true, force: true })
//   .then(() => {
//     console.log(cli.blue("Database & tables created!"));
//   })
//   .catch((err) => {
//     console.log(cli.red(err.message));
//   });
module.exports = db;
