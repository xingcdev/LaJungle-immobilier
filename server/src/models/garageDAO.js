const database = require('../helpers/dbconnect.js');

async function getGarage(id) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Garage WHERE IdGarage=?;';
    database.getConnection((error, connection) => {
      if (error) {
        console.error('Database connection error on getGarage', error.message);
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

async function getAllGarages() {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Garage';
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

async function createGarage(adresse, idLogement) {
  return new Promise((resolve, reject) => {
    let sql = 'INSERT INTO Garage (Adresse, IdLogement) VALUES (?,?);';
    database.getConnection((error, connection) => {
      if (error) {
        console.error('Database connection error on createGarage');
        reject(error);
      }
      connection.query(sql, [adresse, idLogement], (error) => {
        connection.release();
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      });
    });
  });
}

async function deleteGarage(idGarage) {
  let sql = 'DELETE FROM Garage WHERE IdGarage=?;';
  database.getConnection((error, connection) => {
    if (error)
      console.error('Database connection error on deleteGarage', error.message);
    connection.query(sql, [idGarage], (error) => {
      connection.release();
      if (error) {
        console.error(error.message);
        return;
      }
    });
  });
}

async function updateGarage(idGarage, adresse) {
  return new Promise((resolve, reject) => {
    let parametres = new Array();
    let sql = 'UPDATE Garage SET ';
    if (adresse) {
      sql += 'Adresse=? ';
      parametres.push(adresse);
    }
    sql += 'WHERE IdGarage=?;';
    parametres.push(idGarage);
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on updateGarage',
          error.message
        );
      connection.query(sql, parametres, (error, results) => {
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

async function getGarageFromLogement(idLogement) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Posseder WHERE IdLogement=?;';
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on getGarageFromLogement',
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

module.exports = {
  createGarage,
  getGarage,
  getAllGarages,
  deleteGarage,
  updateGarage,
  getGarageFromLogement,
};
