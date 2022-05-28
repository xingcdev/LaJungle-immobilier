const db = require('../models/garageDAO.js');

async function getGarage(request, response) {
  let id = request.query.id;

  if (id === null) {
    response.status(404).json({ error: 'id non défini' });
    return;
  }
  let garage = await db.getGarage(id);
  if (garage === null) {
    response.status(404).json({ error: 'Garage non trouvé' });
    return;
  }

  if (garage === undefined) {
    response.status(404).json({ error: 'Garage non trouvé' });
  }

  response.status(200).send({
    data: garage.map((element) => ({
      idGarage: element.IdGarage,
      adresse: element.Adresse,
      idLogement: element.IdLogement,
    }))[0],
    error: null,
  });
}

async function getAllGarages(request, response) {
  let garages = await db.getAllGarages();

  if (!garages) {
    response.status(404).json({ error: 'Garage non trouvé' });
    return;
  }

  response.status(200).send({
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
