const db = require('../models/visiteDAO.js');

async function getVisite(req, res) {
  let id = req.query.id;

  if (id === null) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  let visite = await db.getVisite(id);
  if (!visite) {
    res.status(404).json({ data: null, error: 'Visite non trouvée' });
    return;
  }

  visite = visite[0];

  res.status(200).send({
    data: visite.map((element) => ({
      idVisite: element.IdVisite,
      dateVisite: element.DateVisite,
      idLogement: element.IdLogement,
      idClient: element.IdClient,
    })),
    error: null,
  });
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

  await db.updateVisite(
    req.body.idVisite,
    req.body.dateHeureVisite,
    req.body.idLogement,
    req.body.idClient
  );

  res.status(200).send({ data: req.query, error: null });
}

async function deleteVisite(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: null, error: 'id non défini' });
  }

  await db.deleteVisite(req.body.id);
  res.json({ data: req.body, error: 'Visite supprimée' });
}

module.exports = {
  getVisite,
  getAllVisitesForALogement,
  createVisite,
  updateVisite,
  deleteVisite,
};
