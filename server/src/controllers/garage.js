const db = require('../models/garageDAO.js');

async function getGarage(req, res) {
  let id = req.query.id;

  if (id === null) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }
  let garage = await db.getGarage(id);
  if (garage === null) {
    res.status(404).json({ data: null, error: 'Garage non trouvé' });
    return;
  }

  if (garage === undefined) {
    res.status(404).json({ data: null, error: 'Garage non trouvé' });
  }

  res.status(200).send({
    data: garage.map((element) => ({
      idGarage: element.IdGarage,
      adresse: element.Adresse,
      idLogement: element.IdLogement,
    }))[0],
    error: null,
  });
}

async function getAllGarages(req, res) {
  let garages = await db.getAllGarages();

  if (!garages) {
    res.status(404).json({ data: null, error: 'Garage non trouvé' });
    return;
  }

  res.status(200).send({
    data: garages.map((element) => ({
      idGarage: element.IdGarage,
      adresse: element.Adresse,
      idLogement: element.IdLogement,
    })),
    error: null,
  });
}

async function updateGarage(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: req.body, error: 'id ne peut être null' });
    return;
  }

  db.updateGarage(req.body.id, req.body.adresse);

  res.status(200).send({ data: req.body, error: null });
}

async function deleteGarage(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: req.body, error: 'id ne peut être null' });
    return;
  }

  await db.deleteGarage(req.body.id);
  res.status(200).send({ data: req.body, error: null });
}

module.exports = {
  //createGarage,
  getGarage,
  getAllGarages,
  updateGarage,
  deleteGarage,
};
