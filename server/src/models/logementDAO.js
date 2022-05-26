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
      'SELECT IdLogement, Adresse, NombrePieces, Superficie, PrixMiseEnVente, CodePostal, Ville, (SELECT COUNT(IdLogement) FROM Posséder WHERE IdLogement = Logement.IdLogement) AS NbGarages FROM Logement;';
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
  // updateLogement,
  deleteLogement,
};
