const db = require('../models/garageDAO.js');

async function getGarage(request, response) {
  let idGarage = request.query.idGarage;

  if (idGarage === null) {
    response.status(404).json({ msg: 'ID cannot be null' });
    return;
  }
  let garage = await db.getGarage(idGarage);
  if (garage === null) {
    response.status(404).json({ msg: 'Garage non trouvé' });
    return;
  }

  if (garage === undefined) {
    response.status(404).json({ msg: 'Garage non trouvé' });
  }

  response.status(200).send({
    data: garage.map((element) => ({
      idGarage: element.IdGarage,
      adresse: element.Adresse,
      idLogement: element.IdLogement,
    }))[0],
    error: 'OK',
  });
}

async function getAllGarages(request, response) {
  let idGarage = request.query.idGarage;

  if (idGarage === null) {
    response.status(404).json({ msg: 'ID cannot be null' });
    return;
  }
  let garages = await db.getAllGarages();
  if (garages === null) {
    response.status(404).json({ msg: 'Garage non trouvé' });
    return;
  }

  if (garages === undefined) {
    response.status(404).json({ msg: 'Garage non trouvé' });
  }

  response.status(200).send({
    data: garages.map((element) => ({
      idGarage: element.IdGarage,
      adresse: element.Adresse,
      idLogement: element.IdLogement,
    })),
    error: 'OK',
  });
}

async function updateGarage(req, res) {
  db.updateGarage(req.query.idGarage, req.query.adresse);

  res.status(200).send({ data: req.query, error: 'OK' });
}

async function deleteGarage(req, res) {
  await db.deleteGarage(req.garage.id);
  res.status(200).send({ message: 'Garage supprimé' });
}

module.exports = {
  //createGarage,
  getGarage,
  getAllGarages,
  updateGarage,
  deleteGarage,
};
