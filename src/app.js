const express = require("express");
const cors = require("cors");
const indexRoutes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(
  cors({
    origin: "",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use("/api/v1", indexRoutes);

app.use(errorHandler);

module.exports = app;
