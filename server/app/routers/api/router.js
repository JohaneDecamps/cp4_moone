const express = require("express");

const router = express.Router();

const usersRouter = require("./users/router")

router.use("/users", usersRouter)

const categoriesRouter = require("./categories/router")

router.use("/categories", categoriesRouter)

const articlesRouter = require("./articles/router")

router.use("/articles", articlesRouter)

const authRouter = require("./auth/router")

router.use("/auth", authRouter)

module.exports = router;


