const router = require("express").Router();

const controller = require("../controller/auth.controller");

router.post("/api/users", controller.login);

module.exports = router;