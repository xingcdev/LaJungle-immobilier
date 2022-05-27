const db = require('../models/logementDAO.js');

async function getLogement(request, response) {
  let ID = request.query.id || request.logement?.id;

  if (ID === null) {
    response.status(404).json({ msg: 'ID cannot be null' });
    return;
  }

  let logement = await db.getLogement(ID);

  if (logement === null) {
    response.status(404).json({ msg: 'Logement non trouvé' });
    return;
  }

  if (logement === undefined) {
    response.status(404).json({ msg: 'Logement non trouvé' });
  }

  logement = logement[0];

  let Logement = {
    IdLogement: ID,
    adresse: logement.Adresse,
    nomProprietaire: logement.NomProprietaire,
    typeLogement: logement.TypeLogement,
    nombrePieces: logement.NombrePieces,
    superficie: logement.Superficie,
    etatHabitation: logement.EtatHabitation,
    prixMiseEnVente: logement.PrixMiseEnVente,
    dateDisponibilite: logement.DateDisponibilite,
    ville: logement.Ville,
  };

  response.json(Logement);
}

async function getAllLogements(request, response) {
  try {
    let logements = await db.getAllLogements();

    if (logements) {
      response.send(
        // Change properties from PascalCase to camelCase
        logements.map((element) => ({
          idLogement: element.IdLogement,
          adresse: element.Adresse,
          nombrePieces: element.NombrePieces,
          superficie: element.Superficie,
          prixMiseEnVente: element.PrixMiseEnVente,
          codePostal: element.CodePostal,
          ville: element.Ville,
          nbGarages: element.NbGarages,
        }))
      );
    } else {
      response.status(200).send({ msg: 'Logements non trouvés' });
    }
  } catch (error) {
    res.send({ error });
  }
}

async function updateLogement(req, res) {
  let adresse = req.body.adresse;
  let nomProprietaire = req.body.nomProprietaire;
  let typeLogement = req.body.typeLogement;
  let nombrePieces = req.body.nombrePieces;
  let superficie = req.body.superficie;
  let etatHabitation = req.body.etatHabitation;
  let prixMiseEnVente = req.body.prixMiseEnVente;
  let dateDisponibilite = req.body.dateDisponibilite;
  let ville = req.body.ville;

  db.updateLogement(
    req.logement.id,
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
  await db.deleteLogement(req.logement.id);
  res.json({ message: 'Logement supprimé' });
}

module.exports = {
  getLogement,
  getAllLogements,
  updateLogement,
  deleteLogement,
};
