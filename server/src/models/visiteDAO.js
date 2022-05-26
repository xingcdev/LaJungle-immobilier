const database = require('../helpers/dbconnect.js');

async function getVisite(id) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Visite WHERE IdVisite=?;';
    database.getConnection((error, connection) => {
      if (error) {
        console.error('Database connection error on getVisite', error.message);
        reject(error);
      }
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

async function createVisite(DateHeureVisite, IdLogement, IdClient) {
  return new Promise((resolve, reject) => {
    let sql =
      'INSERT INTO Visite (DateHeureVisite, IdLogement, IdClient) values (?,?,?);';
    database.getConnection((error, connection) => {
      if (error) {
        console.error(
          'Database connection error on createVisite',
          error.message
        );
        reject(error);
      }
      connection.query(
        sql,
        [DateHeureVisite, IdLogement, IdClient],
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

async function updateVisite(DateHeureVisite, IdLogement, IdClient, IdVisite) {
  let parametres = new Array();
  let requete = 'UPDATE Visite SET ';
  if (req.query.DateVisite !== null) {
    requete += 'DateVisite=? ';
    parametres.push(DateHeureVisite);
  }

  if (req.query.IdLogement !== null) {
    requete += 'IdLogement=? ';
    parametres.push(IdLogement);
  }

  if (req.query.IdClient !== null) {
    requete += 'IdClient=? ';
    parametres.push(IdClient);
  }
  requete += 'WHERE IdVisite=?';
  parametres.push(IdVisite);
  database.getConnection((error, connection) => {
    if (error)
      console.error('Database connection error on updateVisite', error.message);
    connection.query(requete, parametres, (error) => {
      connection.release();
      if (error) {
        console.error(error.message);
        return;
      }
    });
  });
}

async function getAllVisitesForALogement(idLogement) {
  let sql = 'SELECT * FROM Visite WHERE IdLogement=?;';
  database.getConnection((error, connection) => {
    if (error)
      console.error(
        'Database connection error on getAllVisitesForALogement',
        error.message
      );
    connection.query(sql, [idLogement], (error) => {
      connection.release();
      if (error) {
        console.error(error.message);
        return;
      }
    });
  });
}
async function deleteVisite(id) {
  let sql = 'DELETE FROM Visite WHERE IdVisite=?;';
  database.getConnection((error, connection) => {
    if (error)
      console.error('Database connection error on deleteVisite', error.message);
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
  getVisite,
  createVisite,
  deleteVisite,
  updateVisite,
  getAllVisitesForALogement,
};
