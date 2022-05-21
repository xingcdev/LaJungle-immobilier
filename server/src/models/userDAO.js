const database = require('../helpers/dbconnect.js');

async function getUser(idUtilisateur) {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM Utilisateurs WHERE IdUtilisateur=?;";

        database.getConnection((error, connection) => {
            if (error) reject(error);
            connection.query(sql, [idUtilisateur], (error, results) => {
                connection.release();
                if (error)
                    console.error(error.message);
                if (results === undefined) {
                    resolve(null);
                } else if (results.length > 0) {
                    resolve({
                        id: results[0].IdUtilisateur,
                        login: results[0].NomUtilisateur
                    });
                } else {
                    resolve(null);
                }
            });
        });

    }).catch((error) => {
        console.error(error.message);
    });

}

module.exports = {
    getUser
}