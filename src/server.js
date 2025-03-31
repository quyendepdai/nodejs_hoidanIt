require("dotenv").config(); // use dotenv library
const express = require("express"); // use express library
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8888;
// const hostname = process.env.HOST_NAME;

//config req.body (hỗ trợ lấy dữ liệu từ thẻ input form)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

// declare route
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
