const mysql = require('mysql2');
const config = require('../config.json');
const pool = mysql.createPool({
  connectionLimit: 500,
  host: config.mysql.HOST,
  user: config.mysql.USER,
  password: config.mysql.PASSWORD,
  database: 'lajungle',
});

async function checkDbExists() {
  const connection = mysql.createConnection({
    host: config.mysql.HOST,
    user: config.mysql.USER,
    password: config.mysql.PASSWORD,
  });

  await laJungleDb(connection);

  await createLogementTable(connection);
  await createGarageTable(connection);
  await createClientTable(connection);
  await createVisiteTable(connection);
  await createTransactionTable(connection);
  await createPossederTable(connection);

  console.log('Database is ready.');
  connection.end();
}

async function laJungleDb(connection) {
  return new Promise((resolve, reject) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS lajungle;`, (error) => {
      if (error) {
        console.error(error.message);
        reject(error);
      } else {
        resolve();
      }
    });
  }).catch((error) => {
    console.error(error.message);
  });
}

async function createLogementTable(connection) {
  return new Promise((resolve, reject) => {
    connection.query(
      `CREATE TABLE IF NOT EXISTS lajungle.Logement(
                IdLogement INT NOT NULL AUTO_INCREMENT,
                Adresse VARCHAR(50),
                DescriptionLogement TEXT,
                NomProprietaire VARCHAR(50),
                TypeLogement ENUM('Appartement', 'Maison'),
                NombrePieces INT,
                Superficie DECIMAL(7,2),
                EtatHabitation ENUM('Neuf','Bon','Très bon','Mauvais'),
                PrixMiseEnVente float(10,2),
                DateDisponibilite DATE,
                CodePostal VARCHAR(5),
                Ville VARCHAR(50),
                PRIMARY KEY(IdLogement)
             ); `,

      (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  }).catch((error) => {
    console.error(error.message);
  });
}

async function createGarageTable(connection) {
  return new Promise((resolve, reject) => {
    connection.query(
      `CREATE TABLE IF NOT EXISTS lajungle.Garage(
                IdGarage INT NOT NULL AUTO_INCREMENT,
                Adresse VARCHAR(50),
                PRIMARY KEY(IdGarage)
             ); `,

      (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  }).catch((error) => {
    console.error(error.message);
  });
}

async function createClientTable(connection) {
  return new Promise((resolve, reject) => {
    connection.query(
      `CREATE TABLE IF NOT EXISTS lajungle.Client(
                IdClient INT NOT NULL AUTO_INCREMENT,
                NomClient VARCHAR(50),
                PRIMARY KEY(IdClient)
             ); `,

      (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  }).catch((error) => {
    console.error(error.message);
  });
}

async function createVisiteTable(connection) {
  return new Promise((resolve, reject) => {
    connection.query(
      `CREATE TABLE IF NOT EXISTS lajungle.Visite(
                IdVisite INT NOT NULL AUTO_INCREMENT,
                DateHeureVisite DATETIME,
                IdLogement INT NOT NULL,
                IdClient INT NOT NULL,
                PRIMARY KEY(IdVisite),
                FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement),
                FOREIGN KEY(IdClient) REFERENCES Client(IdClient)
             ); `,

      (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  }).catch((error) => {
    console.error(error.message);
  });
}

async function createTransactionTable(connection) {
  return new Promise((resolve, reject) => {
    connection.query(
      `CREATE TABLE IF NOT EXISTS lajungle.Transaction(
                IdTransaction INT NOT NULL AUTO_INCREMENT,
                PrixVente float(10,2),
                PourcentageCommission DECIMAL(3,2) NOT NULL CHECK (PourcentageCommission>=3 AND PourcentageCommission <=5),
                IdLogement INT NOT NULL,
                IdClient INT NOT NULL,
                PRIMARY KEY(IdTransaction),
                FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement),
                FOREIGN KEY(IdClient) REFERENCES Client(IdClient)
             ); `,

      (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  }).catch((error) => {
    console.error(error.message);
  });
}

async function createPossederTable(connection) {
  return new Promise((resolve, reject) => {
    connection.query(
      `CREATE TABLE IF NOT EXISTS lajungle.Posseder(
                IdLogement INT NOT NULL,
                IdGarage INT NOT NULL,
                PRIMARY KEY(IdLogement, IdGarage),
                FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement),
                FOREIGN KEY(IdGarage) REFERENCES Garage(IdGarage)
             ); `,

      (error) => {
        if (error) {
          console.error(error.message);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  }).catch((error) => {
    console.error(error.message);
  });
}

module.exports = {
  checkDbExists,
  getConnection: (callback) => {
    return pool.getConnection(callback);
  },
};
