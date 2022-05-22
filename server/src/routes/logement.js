const router = require("express").Router();
const logement = require("../controllers/logement.js");
const config = require("../config.json");
//const { isAuthorized } = require("../middlewares/auth.js");




router.get('/get', logement.getLogement);

/*router.get("/update", logement.logout);

router.get("/remove", logement.state);*/


module.exports = router;