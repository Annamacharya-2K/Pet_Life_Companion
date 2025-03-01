const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const adminRoutes = require("./route/admin");

mongoose
  .connect('mongodb+srv://makalaannamacharya:Shiva2002@cluster0.i4tsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/access", adminRoutes);

const port = process.env.PORT || 8000;
console.log("err", process.env.DATABASE);
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
  