const router = require("express").Router();
const { isAuthorized } = require("../middlewares/auth.js");

const user = require("./user.js");

router.use("/user", isAuthorized, user);

module.exports = router;