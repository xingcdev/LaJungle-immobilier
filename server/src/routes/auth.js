const router = require("express").Router();
const passport = require("passport");
const auth = require("../controllers/auth.js");
const config = require("../config.json");
const { isAuthorized } = require("../middlewares/auth.js");

router.get("/microsoft", passport.authenticate("microsoft"));
router.get("/local", passport.authenticate('local'));

router.get(
    "/microsoft/redirect",
    passport.authenticate("microsoft", {
        failureRedirect: config.front.URL,
    }),
    auth.microsoftRedirect
);

router.get('/login', auth.login)

router.get("/logout", auth.logout);

router.get("/state", auth.state);

router.get("/", isAuthorized, auth.getAuth);

module.exports = router;