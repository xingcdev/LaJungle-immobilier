const db = require("../models/garageDAO.js");

async function getGarage(request, response) {
    let ID = request.query.id || request.garage?.id;

    if (ID === null) {
        response.status(404).json({ msg: "ID cannot be null" });
        return;
    }

    let garage = await db.getGarage(ID);

    if (garage === null) {
        response.status(404).json({ msg: "Garage non trouvé" });
        return;
    }

    if (garage === undefined) {
        response.status(404).json({ msg: "Garage non trouvé" });
    }

    garage = garage[0]

    let Garage = {
        IdGarage : ID,
        Adresse : garage.Adresse,
        IdLogement : garage.IdLogement
    };

    response.json(Garage);
}

async function updateGarage(req, res) {
    let Adresse = req.body.Adresse;
    let IdLogement = req.body.IdLogement

    db.updateGarage(
        req.garage.id,
        Adresse,
        IdLogement
    );

    res.status(200).json({ msg: "OK" });
}

async function deleteGarage(req, res) {
    await db.deleteGarage(req.garage.id);
    res.json({ message: "Garage supprimé" });
}

module.exports = {
    getGarage,
    updateGarage,
    deleteGarage
};

module.exports = {
    createGarage,
    updateGarage,
    deleteGarage
}