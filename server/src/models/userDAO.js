const database = require('../helpers/dbconnect.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');

async function getUser(username) {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM Utilisateurs WHERE NomUtilisateur=?;";

        passport.use(new LocalStrategy(function verify(username, password, done) {
            database.getConnection((error, connection) => {
                if (error) reject(error);
                connection.query(sql, [username], (error, results) => {
                    console.log(resultats);
                    connection.release();
                    if (error) {
                        console.error(error.message);
                    // if (results === undefined) {
                    //     resolve(null);
                    } else if (results.length > 0) {
                            return {username: results[0].NomUtilisateur, password: results[0].MotDePasse}
                    } else {
                        resolve(null);
                    }
                });
            });
        }))
    }).catch((error) => {
        console.error(error.message);
    });
}

async function createUser(NomUtilisateur, MotDePasse) {
    
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO Utilisateur (NomUtilisateur, MotDePasse) VALUES (?, ?);";
        database.getConnection((error, connection) => {
            if(error){
                console.error("Database connection error on createGarage");
                reject(error);
            }
            connection.query(sql, [NomUtilisateur, MotDePasse], (error) => {
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


async function createUser(NomUtilisateur, MotDePasse) { 
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO Utilisateur (NomUtilisateur, MotDePasse) VALUES (?);";
        database.getConnection((error, connection) => {
            if(error){
                console.error("Database connection error on createUser");
                reject(error);
            }
            connection.query(sql, [NomUtilisateur, MotDePasse], (error) => {
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

//Modifier les informations de  l'utilisateur 



module.exports = {
    getUser,
    createUser
}