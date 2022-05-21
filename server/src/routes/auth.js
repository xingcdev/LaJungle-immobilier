const router = require("express").Router();
const auth = require("../controllers/auth.js");
const config = require("../config.json");
const { isAuthorized } = require("../middlewares/auth.js");


router.get("/logout", auth.logout);

router.get("/state", auth.state);

router.get("/", isAuthorized, auth.getAuth);

module.exports = router;