const db = require("../models/userDAO.js");

async function getUser(request, response) {


    let ID = request.query.id || request.user?.id;

    if (ID === null) {
        response.status(404).json({ msg: "ID ne peut être null" });
        return;
    }

    let user = await db.getUser(ID);

    if (user === null) {
        response.status(404).json({ msg: "Utilisateur non trouvé" });
        return;
    }

    if (user === undefined) {
        response.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    let User = {
        User_ID: ID,
        username: user.NomUtilisateur        
    };

    response.json(User);
}

module.exports = {
    getUser
};
