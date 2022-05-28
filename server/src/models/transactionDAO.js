const database = require('../helpers/dbconnect.js');

async function getTransaction(id) {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Transaction WHERE IdTransaction=?;';
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

async function createTransaction(
  prixVente,
  pourcentageCommission,
  idLogement,
  idClient
) {
  return new Promise((resolve, reject) => {
    let sql =
      'INSERT INTO Transaction (PrixVente, PourcentageCommission, IdLogement, IDClient) values (?,?,?,?);';
    database.getConnection((error, connection) => {
      if (error) throw error;
      connection.query(
        sql,
        [prixVente, pourcentageCommission, idLogement, idClient],
        (error) => {
          if (error) {
            console.error(error.message);
            connection.release();
            reject(error);
          } else {
            console.log('Transaction ajoutée');
            connection.release();
            resolve();
          }
        }
      );
    });
  }).catch((error) => {
    console.log(error);
  });
}

async function updateTransaction(
  prixVente,
  pourcentageCommission,
  idLogement,
  idClient,
  idTransaction
) {
  return new Promise((resolve, reject) => {
    let parametres = new Array();
    let sql = 'UPDATE Transaction SET ';

    if (prixVente) {
      sql += 'PrixVente=?,';
      parametres.push(prixVente);
    }

    if (pourcentageCommission) {
      sql += ' PourcentageCommission=?,';
      parametres.push(pourcentageCommission);
    }

    if (idLogement) {
      sql += ' IdLogement=?,';
      parametres.push(idLogement);
    }

    if (idClient) {
      sql += ' IdClient=?';
      parametres.push(idClient);
    }

    if (sql.charAt(sql.length - 1) == ',') {
      // enlever virgule restante avant le WHERE
      sql = sql.slice(0, -1);
    }

    sql += ' WHERE IdTransaction=?';

    parametres.push(idTransaction);
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on updateTransaction',
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

async function deleteTransaction(id) {
  return new Promise((resolve, reject) => {
    let sql = 'DELETE FROM Transaction WHERE IdTransaction=?;';
    database.getConnection((error, connection) => {
      if (error)
        console.error(
          'Database connection error on deleteTransaction',
          error.message
        );
      connection.query(sql, [id], (error) => {
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

async function getAllTransactions() {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM Transaction;';
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

module.exports = {
  getTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getAllTransactions,
};
