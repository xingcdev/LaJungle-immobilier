const db = require('../models/visiteDAO.js');

async function getVisite(req, res) {
  let id = req.query.id;

  if (!id) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  try {
    let visite = await db.getVisite(id);

    if (!visite) {
      res.status(404).send({ data: null, error: 'Visite non trouvée' });
      return;
    }

    res.status(200).send({
      // PascalCase vers camelCase
      data: visite.map((element) => ({
        idVisite: element.IdVisite,
        dateVisite: element.DateVisite,
        idLogement: element.IdLogement,
        idClient: element.IdClient,
      }))[0],
      error: null,
    });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function getAllVisites(req, res) {
  try {
    let visites = await db.getAllVisites();

    if (visites) {
      res.status(200).send({
        data: visites.map((element) => ({
          idVisite: element.IdVisite,
          dateHeureVisite: element.DateHeureVisite,
          idLogement: element.IdLogement,
          idClient: element.IdClient,
        })),
        error: null,
      });
    } else {
      res.status(200).send({ data: null, error: 'Visites non trouvées' });
    }
  } catch (error) {
    res.send({ error });
  }
}

async function getAllVisitesForALogement(req, res) {
  let id = req.query.id;

  if (!id) {
    res.status(404).json({ data: null, error: 'id non défini' });
    return;
  }

  try {
    let visites = await db.getAllVisitesForALogement(id);

    if (visites) {
      res.status(200).send({
        data: visites.map((element) => ({
          idVisite: element.IdVisite,
          dateHeureVisite: element.DateHeureVisite,
          idLogement: element.IdLogement,
          idClient: element.IdClient,
        })),
        error: null,
      });
    } else {
      res.status(200).send({ data: null, error: 'Visites non trouvées' });
    }
  } catch (error) {
    res.send({ error });
  }
}

async function createVisite(req, res) {
  let visite = req.query;
  db.createVisite(visite.dateHeureVisite, visite.idLogement, visite.idClient);

  res.status(200).send({ data: req.query, error: null });
}

async function updateVisite(req, res) {
  if (!req.query.id) {
    res.status(400).send({ data: null, error: 'id non défini' });
  }

  try {
    await db.updateVisite(
      req.body.idVisite,
      req.body.dateHeureVisite,
      req.body.idLogement,
      req.body.idClient
    );

    res.status(200).send({ data: req.query, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function deleteVisite(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: null, error: 'id non défini' });
  }

  try {
    await db.deleteVisite(req.body.id);
    res.json({ data: req.body, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

module.exports = {
  getVisite,
  getAllVisites,
  getAllVisitesForALogement,
  createVisite,
  updateVisite,
  deleteVisite,
};
