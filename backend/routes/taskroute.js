const express = require("express");
const { createTask } = require("../controllor/taskcontroller");
const router = express.Router();

router.post("/", createTask);

module.exports = router;
