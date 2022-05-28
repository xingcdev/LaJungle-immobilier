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

async function getAllVisites() {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Visite;';
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on getAllVisitesForALogement',
          error.message
        );
      connection.query(sql, [], (error, results) => {
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

async function updateVisite(dateHeureVisite, idLogement, idClient, idVisite) {
  return new Promise((resolve, reject) => {
    let parametres = new Array();
    let sql = 'UPDATE Visite SET ';
    if (dateHeureVisite !== null) {
      sql += 'DateHeureVisite=?,';
      parametres.push(dateHeureVisite);
    }

    if (idLogement !== null) {
      sql += ' IdLogement=?, ';
      parametres.push(idLogement);
    }

    if (idClient !== null) {
      sql += ' IdClient=? ';
      parametres.push(idClient);
    }

    if (sql.charAt(sql.length - 1) == ',') {
      // enlever virgule restante avant le WHERE
      sql = sql.slice(0, -1);
    }

    sql += ' WHERE IdVisite=?';
    parametres.push(idVisite);

    database.getConnection((error, connection) => {
      if (error) {
        console.error(
          'Database connection error on updateVisite',
          error.message
        );
        reject(error);
      }
      connection.query(sql, parametres, (error, results) => {
        connection.release();
        if (error) {
          console.error(error);
          reject(error);
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

async function deleteVisite(id) {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM Visite WHERE IdVisite=?;';
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on deleteVisite',
          error.message
        );
      connection.query(sql, [id], (error, results) => {
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

module.exports = {
  createVisite,
  getVisite,
  getAllVisites,
  getAllVisitesForALogement,
  deleteVisite,
  updateVisite,
};
