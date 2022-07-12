const mysql = require('mysql2');

const {
	MYSQL_HOST: HOST,
	MYSQL_USER: USER,
	MYSQL_PASSWORD: PASSWORD,
} = process.env;

const pool = mysql.createPool({
	connectionLimit: 500,
	host: HOST,
	user: USER,
	password: PASSWORD,
	database: 'lajungle',
});

async function checkDbExists() {
	const connection = mysql.createConnection({
		host: HOST,
		user: USER,
		password: PASSWORD,
	});

	await laJungleDb(connection);

	await createEtatHabitationTable(connection);
	await insertEtatHabitationTable(connection);

	await createTypeLogementTable(connection);
	await insertTypeLogementTable(connection);

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

async function createEtatHabitationTable(connection) {
	return new Promise((resolve, reject) => {
		connection.query(
			`CREATE TABLE IF NOT EXISTS lajungle.EtatHabitation(
                IdEtat VARCHAR(8),
                LibelleEtat VARCHAR(8),
                PRIMARY KEY(IdEtat)
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

async function insertEtatHabitationTable(connection) {
	return new Promise((resolve, reject) => {
		connection.query(
			`INSERT IGNORE INTO lajungle.EtatHabitation(IdEtat, LibelleEtat) VALUES ('neuf', 'Neuf'), ('bon', 'Bon'), ('tres_bon', 'Très bon'), ('mauvais', 'Mauvais'); `,
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

async function createTypeLogementTable(connection) {
	return new Promise((resolve, reject) => {
		connection.query(
			`CREATE TABLE IF NOT EXISTS lajungle.TypeLogement(
                IdType VARCHAR(11),
                LibelleType VARCHAR(11),
                PRIMARY KEY(IdType)
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

async function insertTypeLogementTable(connection) {
	return new Promise((resolve, reject) => {
		connection.query(
			`INSERT IGNORE INTO lajungle.TypeLogement(IdType, LibelleType) VALUES ('maison', 'Maison'), ('appartement', 'Appartement'); `,
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

async function createLogementTable(connection) {
	return new Promise((resolve, reject) => {
		connection.query(
			`CREATE TABLE IF NOT EXISTS lajungle.Logement(
                IdLogement INT NOT NULL AUTO_INCREMENT,
                Adresse VARCHAR(50),
                DescriptionLogement TEXT,
                NomProprietaire VARCHAR(50),
                IdType VARCHAR(11),
                NombrePieces INT,
                Superficie DECIMAL(7,2),
                IdEtat VARCHAR(8),
                PrixMiseEnVente float(10,2),
                DateDisponibilite DATE,
                CodePostal VARCHAR(5),
                Ville VARCHAR(50),
                PRIMARY KEY(IdLogement),
                FOREIGN KEY(IdEtat) REFERENCES EtatHabitation(IdEtat)
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
                FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement) ON DELETE CASCADE,
                FOREIGN KEY(IdClient) REFERENCES Client(IdClient) ON DELETE CASCADE
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
                FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement) ON DELETE CASCADE,
                FOREIGN KEY(IdClient) REFERENCES Client(IdClient) ON DELETE CASCADE
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
                FOREIGN KEY(IdLogement) REFERENCES Logement(IdLogement) ON DELETE CASCADE,
                FOREIGN KEY(IdGarage) REFERENCES Garage(IdGarage) ON DELETE CASCADE
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
