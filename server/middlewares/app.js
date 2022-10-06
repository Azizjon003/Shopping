const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("cookie-parser");
const errorHandler = require("../controllers/errorHandler");
app.use(express.json());
app.use(morgan("dev"));
app.use(parser());
const vacancyRouter = require("../routes/vacancyRouter");
const locationRouter = require("../routes/locationRouter");
const userRouter = require("../routes/userRouter");
const vacancyCategories = require("../routes/vacancyCategoryRouter");
const submitVacancy = require("../routes/submitVacancyRouter");
const review = require("../routes/reviewRouter");

const auth = require("../routes/authRouter");
app.use("/", auth);
app.use("/api/v1/vacancy", vacancyRouter);
app.use("/api/v1/locations", locationRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/vacancyCategories", vacancyCategories);
app.use("/api/v1/submitVacancy", submitVacancy);
app.use("/api/v1/reviews", review);
app.use(errorHandler);

module.exports = app;
