const db = require('../models/logementDAO.js');

async function getLogement(req, res) {
  let id = req.query.id;

  if (!id) {
    res.status(404).json({ data: null, error: 'id non défini' });
    return;
  }

  let logement = await db.getLogement(id);

  if (!logement) {
    res.status(404).json({ data: null, error: 'Logement non trouvé' });
    return;
  }

  res.status(200).send({
    data: logement.map((element) => ({
      idLogement: element.IdLogement,
      adresse: element.Adresse,
      nombrePieces: element.NombrePieces,
      superficie: element.Superficie,
      prixMiseEnVente: element.PrixMiseEnVente,
      codePostal: element.CodePostal,
      ville: element.Ville,
      nbGarages: element.NbGarages,
    }))[0],
    error: null,
  });
}

async function getAllLogements(req, res) {
  try {
    let logements = await db.getAllLogements();

    if (logements) {
      res.status(200).send({
        // PascalCase vers camelCase
        data: logements.map((element) => ({
          idLogement: element.IdLogement,
          adresse: element.Adresse,
          nombrePieces: element.NombrePieces,
          superficie: element.Superficie,
          prixMiseEnVente: element.PrixMiseEnVente,
          codePostal: element.CodePostal,
          ville: element.Ville,
          nbGarages: element.NbGarages,
        })),
        error: null,
      });
    } else {
      res.status(200).send({ data: null, error: 'Logements non trouvés' });
    }
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function updateLogement(req, res) {
  if (!req.body.id) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  db.updateLogement(
    req.body.id,
    req.body.adresse,
    req.body.description,
    req.body.nomProprietaire,
    req.body.typeLogement,
    req.body.nombrePieces,
    req.body.superficie,
    req.body.etatHabitation,
    req.body.prixMiseEnVente,
    req.body.dateDisponibilite,
    req.body.codePostal,
    req.body.ville
  );

  res.status(200).json({ data: req.body, error: null });
}

async function deleteLogement(req, res) {
  await db.deleteLogement(req.body.id);
  res.status(200).send({ data: req.body, error: null });
}

module.exports = {
  getLogement,
  getAllLogements,
  updateLogement,
  deleteLogement,
};
