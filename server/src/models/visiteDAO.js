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
        (error, results) => {
          connection.release();
          if (error) {
            console.error(error.message);
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  });
}

async function updateVisite(dateHeureVisite, idLogement, idClient, idVisite) {
  return new Promise((resolve, reject) => {
    let parametres = new Array();
    let requete = 'UPDATE Visite SET ';
    if (dateHeureVisite !== null) {
      requete += 'DateHeureVisite=?, ';
      parametres.push(dateHeureVisite);
    }

    if (idLogement !== null) {
      requete += 'IdLogement=?, ';
      parametres.push(idLogement);
    }

    if (idClient !== null) {
      requete += 'IdClient=? ';
      parametres.push(idClient);
    }
    requete += 'WHERE IdVisite=?';
    parametres.push(idVisite);

    database.getConnection((error, connection) => {
      if (error) {
        console.error(
          'Database connection error on updateVisite',
          error.message
        );
        reject(error);
      }
      connection.query(requete, parametres, (error, results) => {
        connection.release();
        if (error) {
          console.error(error.message);
        }
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

async function getAllVisitesForALogement(idLogement) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Visite WHERE IdLogement=?;';
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on getAllVisitesForALogement',
          error.message
        );
      connection.query(sql, [idLogement], (error, results) => {
        connection.release();
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }).catch((error) => {
    console.log(error);
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
