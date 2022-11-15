const router = require("express").Router();

const controller = require("../controller/user.controller");

router.post("/api/users/signin", controller.register);

module.exports = router;