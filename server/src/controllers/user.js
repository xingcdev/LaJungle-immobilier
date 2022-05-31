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

async function createUser(req, res) {
    try {
      await db.createUser(
        req.body.NomUtilisateur,
        req.body.MotDePasse
      );
      res.status(200).send({ data: req.body, error: null });
    } catch (error) {
      res.status(500).send({ data: null, error: error.message });
    }
}

module.exports = {
    getUser,
    createUser
};
