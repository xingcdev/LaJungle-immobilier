const config = require("../config.json");
const getUser = require("../models/userDAO.js");
const db = require("../models/userDAO.js");
async function getAuth(req, res) {
    res.json({ user: req.user });
}

async function microsoftRedirect(req, res) {
    res.redirect(`${config.front.URL}/`); // Dashboard page
}

async function login(req, res) {
    try {
        const { username, password } = req.query;
        let dbuser = db.getUser(username);
        if(dbuser.MotDePasse === password) {
            res.status(200).json({ msg: "OK" });
        }
    } catch(e) {
        res.status(401).send({
			error: e.message,
		});
    }
    
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
    microsoftRedirect,
    login,
    logout,
    state
};