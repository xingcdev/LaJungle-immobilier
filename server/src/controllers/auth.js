const config = require("../config.json");

async function getAuth(req, res) {
    res.json({ user: req.user });
}

async function jwtRedirect(req, res) {
    res.redirect(`${config.front.URL}/`); // Dashboard page
}

async function logout(req, res) {
    req.logout();
    res.redirect(config.front.URL);
}

async function state(req, res) {
    if (!req.user) {
        res.status(401).json({ msg: "Unauthorized" });
    } else {
        res.status(200).json({ msg: "OK" });
    }
}

module.exports = {
    getAuth,
    jwtRedirect,
    logout,
    state
};