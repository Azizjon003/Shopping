const dotenv = require("dotenv").config("");
const app = require("./middlewares/app");
const cli = require("cli-color");
const express = require("express");

const PORT = process.env.PORT || 8000;
require("./configs/db");
const { json } = require("body-parser");

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
