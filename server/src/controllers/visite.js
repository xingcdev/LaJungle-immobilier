const db = require("../models/visiteDAO.js");

async function getVisite(request, response) {
    let ID = request.query.id || request.visite?.id;

    if (ID === null) {
        response.status(404).json({ msg: "ID cannot be null" });
        return;
    }

    let visite = await db.getVisite(ID);

    if (visite === null) {
        response.status(404).json({ msg: "Visite non trouvé" });
        return;
    }

    if (visite === undefined) {
        response.status(404).json({ msg: "Visite non trouvé" });
    }

    visite = visite[0]

    let Visite = {
        IdVisite : ID,
        DateVisite : visite.DateVisite,
        IdLogement : visite.IdLogement,
        IdClient : visite.IdClient
    };

    response.json(Visite);
}

async function updateVisite(req, res) {
    let DateVisite = req.body.DateVisite;
    let IdLogement = req.body.IdLogement;
    let IdClient = req.body.IdClient;

    db.updateGarage(
        req.visite.id,
        DateVisite,
        IdLogement,
        IdClient
    );

    res.status(200).json({ msg: "OK" });
}

async function deleteVisite(req, res) {
    await db.deleteVisite(req.visite.id);
    res.json({ message: "Visite supprimé" });
}

module.exports = {
    getVisite,
    createVisite,
    updateVisite,
    deleteVisite
};