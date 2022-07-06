// inisiasi penggunaan konfigurasi dari file .env
require("dotenv").config();
// import express
const express = require("express");
// import cors
const cors = require("cors");
// import logger
const morgan = require("morgan");
// import routes
const indexRouter = require("./routes/indexRoute");
const menuRouter = require("./routes/menuRoute");
// import middleware
const clientError = require("./middleware/clientError");
const serverError = require("./middleware/serverError");
// konfigurasi port
const port = process.env.PORT || 3000;
// inisiasi express
const app = express();
app.use(cors());
// implementasi logger
app.use(morgan("dev"));
// implementasi pembacaan body html
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
var bodyParser = require("body-parser");
const { json } = require("body-parser");
app.use(bodyParser.json());
// implementasi router
app.use("/", indexRouter);
app.use("/menu", menuRouter);
// implementasi error handler
app.use(clientError.client);
app.use(serverError.server);
// running server
app.listen(port, () => {
  console.log(`Cashier app listening at http://localhost:${port}`);
});
