const db = require('../models/visiteDAO.js');

async function getVisite(request, response) {
  let ID = request.query.id || request.visite?.id;

  if (ID === null) {
    response.status(404).json({ msg: 'ID ne peut être nul' });
    return;
  }

  let visite = await db.getVisite(ID);
  if (visite === null) {
    response.status(404).json({ data: null, error: 'Visite non trouvée' });
    return;
  }

  if (visite === undefined) {
    response.status(404).json({ data: null, error: 'Visite non trouvée' });
  }

  visite = visite[0];

  response.send(
    visite.map((element) => ({
      idVisite: element.IdVisite,
      dateVisite: element.DateVisite,
      idLogement: element.IdLogement,
      idClient: element.IdClient,
    }))
  );

  let Visite = {};

  response.status(200).send(Visite);
}

async function getAllVisitesForALogement(request, response) {
  let ID = request.query.id || request.visite?.id;

  if (ID === null) {
    response.status(404).json({ data: null, error: 'ID ne peut être nul' });
    return;
  }

  try {
    let visites = await db.getAllVisitesForALogement(ID);
    console.log(visites);
    if (visites) {
      response.send(
        visites.map((element) => ({
          idVisite: element.IdVisite,
          dateHeureVisite: element.DateHeureVisite,
          idLogement: element.IdLogement,
          idClient: element.IdClient,
        }))
      );
    } else {
      response.status(200).send({ error: 'Visites non trouvées' });
    }
  } catch (error) {
    res.send({ error });
  }
}

async function createVisite(request, response) {
  let visite = request.query;
  db.createVisite(visite.dateHeureVisite, visite.idLogement, visite.idClient);

  response.status(200).send({ error: null });
}

async function updateVisite(req, res) {
  let visite = req.query;

  await db.updateVisite(
    visite.dateHeureVisite,
    visite.idLogement,
    visite.idClient,
    visite.idVisite
  );

  res.status(200).send({ data: req.query, error: null });
}

async function deleteVisite(req, res) {
  await db.deleteVisite(req.visite.id);
  res.json({ msg: 'Visite supprimée' });
}

module.exports = {
  getVisite,
  getAllVisitesForALogement,
  createVisite,
  updateVisite,
  deleteVisite,
};
