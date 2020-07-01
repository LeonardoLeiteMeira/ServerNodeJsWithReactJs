const express = require("express");
const routes = express.Router();

const HelloWordController = require("./controllers/HelloWordController");

routes.get("/api", HelloWordController.getHelloWord);

module.exports = routes;
