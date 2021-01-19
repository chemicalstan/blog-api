const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const usersRoute = require("./routes/usersRoute");
const articlesRoute = require("./routes/articlesRoute");
dotenv.config();

const app = express();
const db = require("./models");
// db.sequelize.sync();

try {
  db.sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(usersRoute);
app.use(articlesRoute);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${process.env.PORT}`);
});
