const db = require("../models/userDAO.js");

async function getUser(req, res) {


    let ID = req.query.id || req.user?.id;

    if (ID === null) {
        res.status(404).json({ msg: "ID ne peut être null" });
        return;
    }

    let user = await db.getUser(ID);

    if (user === null) {
        res.status(404).json({ msg: "Utilisateur non trouvé" });
        return;
    }

    if (user === undefined) {
        res.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    let User = {
        User_ID: ID,
        username: user.NomUtilisateur        
    };

    res.json(User);
}

module.exports = {
    getUser
};
