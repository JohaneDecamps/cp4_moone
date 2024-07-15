const express = require("express");

const router = express.Router();

const usersRouter = require("./users/router")

router.use("/users", usersRouter)

const categoriesRouter = require("./categories/router")

router.use("/categories", categoriesRouter)

module.exports = router;
