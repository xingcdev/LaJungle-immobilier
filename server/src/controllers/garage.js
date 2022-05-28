const db = require('../models/garageDAO.js');

async function getGarage(req, res) {
  let id = req.query.id;

  if (!id) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  try {
    let garage = await db.getGarage(id);

    if (!garage) {
      res.status(404).send({ data: null, error: 'Garage non trouvé' });
      return;
    }

    res.status(200).send({
      // PascalCase vers camelCase
      data: garage.map((element) => ({
        idGarage: element.IdGarage,
        adresse: element.Adresse,
        idLogement: element.IdLogement,
      }))[0],
      error: null,
    });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function getAllGarages(req, res) {
  try {
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
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function updateGarage(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: req.body, error: 'id non défini' });
    return;
  }

  try {
    await db.updateGarage(req.body.id, req.body.adresse);

    res.status(200).send({ data: req.body, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function deleteGarage(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: req.body, error: 'id ne peut être null' });
    return;
  }

  try {
    await db.deleteGarage(req.body.id);
    res.status(200).send({ data: req.body, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

module.exports = {
  //createGarage,
  getGarage,
  getAllGarages,
  updateGarage,
  deleteGarage,
};
