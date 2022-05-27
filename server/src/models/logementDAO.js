const database = require('../helpers/dbconnect.js');

async function getLogement(id) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Logement WHERE IdLogement=?;';
    database.getConnection((error, connection) => {
      if (error) reject(error);
      connection.query(sql, [id], (error, results) => {
        connection.release();
        if (error) console.error(error.message);
        if (results === undefined) {
          resolve(null);
        } else if (results.length > 0) {
          resolve(results);
        } else {
          resolve(null);
        }
      });
    });
  }).catch((error) => {
    console.log(error);
  });
}

async function getAllLogements() {
  return new Promise((resolve, reject) => {
    let sql =
      'SELECT IdLogement, Adresse, NombrePieces, Superficie, PrixMiseEnVente, CodePostal, Ville, (SELECT COUNT(IdLogement) FROM Posseder WHERE IdLogement = Logement.IdLogement) AS NbGarages FROM Logement;';
    database.getConnection((error, connection) => {
      if (error) reject(error);
      connection.query(sql, [], (error, results) => {
        connection.release();
        if (error) console.error(error.message);
        if (results === undefined) {
          resolve(null);
        } else if (results.length > 0) {
          resolve(results);
        } else {
          resolve(null);
        }
      });
    });
  }).catch((error) => {
    console.log(error);
  });
}

async function createLogement(
  adresse,
  nomProprietaire,
  typeLogement,
  nombrePieces,
  superficie,
  etatHabitation,
  prixMiseEnVente,
  dateDisponibilite,
  ville
) {
  return new Promise((resolve, reject) => {
    let sql =
      'INSERT INTO Logement (Adresse, NomProprietaire, TypeLogement, NombrePieces, Superficie, EtatHabitation, PrixMiseEnVente, DateDisponibilite, Ville) values (?,?,?,?,?,?,?,?,?);';
    database.getConnection((error, connection) => {
      if (error) {
        console.error('Database connection error on createLogement');
        reject(error);
      }
      connection.query(
        sql,
        [
          adresse,
          nomProprietaire,
          typeLogement,
          nombrePieces,
          superficie,
          etatHabitation,
          prixMiseEnVente,
          dateDisponibilite,
          ville,
        ],
        (error) => {
          connection.release();
          if (error) {
            console.error(error.message);
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  });
}

async function updateLogement(
  id,
  adresse,
  descriptionLogement,
  nomProprietaire,
  typeLogement,
  nombrePieces,
  superficie,
  etatHabitation,
  prixMiseEnVente,
  dateDisponibilite,
  codePostal,
  ville
) {
  let sql = 'UPDATE Logement SET ';
  let parametres = new Array();

  if (adresse) {
    sql += 'Adresse = ? ';
    parametres.push(adresse);
  }

  if (descriptionLogement) {
    sql += 'DescriptionLogement = ? ';
    parametres.push(descriptionLogement);
  }

  if (nomProprietaire) {
    sql += 'NomProprietaire = ? ';
    parametres.push(nomProprietaire);
  }

  if (typeLogement) {
    sql += 'TypeLogement = ? ';
    parametres.push(typeLogement);
  }

  if (nombrePieces) {
    sql += 'NombrePieces = ? ';
    parametres.push(nombrePieces);
  }

  if (superficie) {
    sql += 'Superficie = ? ';
    parametres.push(superficie);
  }

  if (etatHabitation) {
    sql += 'EtatHabitation = ? ';
  }

  if (prixMiseEnVente) {
    sql += 'PrixMiseEnVente = ? ';
    parametres.push(prixMiseEnVente);
  }

  if (dateDisponibilite) {
    sql += 'DateDisponibilite = ? ';
    parametres.push(dateDisponibilite);
  }

  if (codePostal) {
    sql += 'CodePostal=? ';
    parametres.push(codePostal);
  }

  if (ville) {
    sql += 'Ville = ? ';
    parametres.push(ville);
  }

  sql += 'WHERE IdLogement = ?;';
  database.getConnection((error, connection) => {
    if (error)
      console.error(
        'Database connection error on updateLogement',
        error.message
      );
    connection.query(sql, [id], (error) => {
      connection.release();
      if (error) {
        console.error(error.message);
        return;
      }
    });
  });
}

async function deleteLogement(id) {
  let sql = 'DELETE FROM Logement WHERE IdLogement=?;';
  database.getConnection((error, connection) => {
    if (error)
      console.error(
        'Database connection error on deleteLogement',
        error.message
      );
    connection.query(sql, [id], (error) => {
      connection.release();
      if (error) {
        console.error(error.message);
        return;
      }
    });
  });
}

module.exports = {
  getLogement,
  getAllLogements,
  createLogement,
  updateLogement,
  deleteLogement,
};
