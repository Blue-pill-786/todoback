const express = require("express");
const controller = require("./todoController");

const router = express.Router();

// GET request to retrieve all to-do items
router.get("/", controller.get);

// POST request to add a new to-do item
router.post("/", controller.post);

module.exports = {
  router
};
