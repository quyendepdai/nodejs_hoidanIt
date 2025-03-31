const path = require("path");
const express = require("express");

const configViewEngine = (app) => {
  //config template engine  https://expressjs.com/en/guide/using-template-engines.html
  app.set("views", path.join("./src", "views")); // folder for templates engine use Path library
  app.set("view engine", "ejs");

  //config static files images scss
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
