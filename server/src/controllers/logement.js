const db = require('../models/logementDAO.js');

async function getLogement(request, response) {
  let ID = request.query.id || request.logement?.id;

  if (ID === null) {
    response.status(404).json({ msg: 'ID cannot be null' });
    return;
  }

  let logement = await db.getLogement(ID);

  if (logement === null) {
    response.status(404).json({ error: 'Logement non trouvé' });
    return;
  }

  if (logement === undefined) {
    response.status(404).json({ error: 'Logement non trouvé' });
  }

  response.status(200).send({
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

async function getAllLogements(request, response) {
  try {
    let logements = await db.getAllLogements();

    if (logements) {
      response.status(200).send({
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
        msg: 'OK',
        error: null,
      });
    } else {
      response.status(200).send({ data: [], error: 'Logements non trouvés' });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({ data: [], error: error.message });
  }
}

async function updateLogement(req, res) {
  let adresse = req.query.adresse;
  let nomProprietaire = req.query.nomProprietaire;
  let typeLogement = req.query.typeLogement;
  let nombrePieces = req.query.nombrePieces;
  let superficie = req.query.superficie;
  let etatHabitation = req.query.etatHabitation;
  let prixMiseEnVente = req.query.prixMiseEnVente;
  let dateDisponibilite = req.query.dateDisponibilite;
  let ville = req.query.ville;

  db.updateLogement(
    req.query.id,
    adresse,
    nomProprietaire,
    typeLogement,
    nombrePieces,
    superficie,
    etatHabitation,
    prixMiseEnVente,
    dateDisponibilite,
    ville
  );

  res.status(200).json({ msg: 'OK' });
}

async function deleteLogement(req, res) {
  await db.deleteLogement(req.query.id);
  res.status(200).send({ data: [], error: 'Logement supprimé' });
}

module.exports = {
  getLogement,
  getAllLogements,
  updateLogement,
  deleteLogement,
};
