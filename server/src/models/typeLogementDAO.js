const database = require('../helpers/dbconnect.js');

async function getList() {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM TypeLogement;';
    database.getConnection((error, connection) => {
      if (error) reject(error);
      connection.query(sql, [], (error, results) => {
        connection.release();
        if (error) {
          console.error(error.message);
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

module.exports = {
  getList,
};
