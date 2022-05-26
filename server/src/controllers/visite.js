const db = require('../models/visiteDAO.js');

async function getVisite(request, response) {
  let ID = request.query.id || request.visite?.id;

  if (ID === null) {
    response.status(404).json({ msg: 'ID ne peut être nul' });
    return;
  }

  let visite = await db.getVisite(ID);

  if (visite === null) {
    response.status(404).json({ msg: 'Visite non trouvée' });
    return;
  }

  if (visite === undefined) {
    response.status(404).json({ msg: 'Visite non trouvée' });
  }

  visite = visite[0];

  let Visite = {
    IdVisite: ID,
    DateVisite: visite.DateVisite,
    IdLogement: visite.IdLogement,
    IdClient: visite.IdClient,
  };

  response.json(Visite);
}

async function getAllVisitesForALogement(request, response) {
  let ID = request.query.id || request.visite?.id;

  if (ID === null) {
    response.status(404).json({ msg: 'ID ne peut être nul' });
    return;
  }

  try {
    let visites = await db.getAllVisitesForALogement(ID);
    if (visites) {
      response.send(
        visites.map((element) => ({
          dateHeureVisite: element.dateHeureVisite,
          idLogement: element.idLogement,
          idClient: element.idClient,
        }))
      );
    } else {
      response.status(200).send({ msg: 'Visites non trouvées' });
    }
  } catch (error) {
    res.send({ error });
  }
}

async function createVisite(request, response) {
  let visite = request.body;
  db.createVisite(visite.dateHeureVisite, visite.idLogement, visite.idClient);

  response.status(200).send({ msg: 'OK' });
}

async function updateVisite(req, res) {
  let DateVisite = req.body.DateVisite;
  let IdLogement = req.body.IdLogement;
  let IdClient = req.body.IdClient;

  await db.updateVisite(req.visite.id, DateVisite, IdLogement, IdClient);

  res.status(200).send({ msg: 'OK' });
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
