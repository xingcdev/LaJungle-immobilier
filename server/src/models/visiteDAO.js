const database = require('../helpers/dbconnect.js');

async function getVisite(id) {
    
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM Visite WHERE IdVisite=?;";
        database.getConnection((error, connection) => {
            if (error)
                reject(error);
            connection.query(sql, [id], (error, results) => {
                connection.release();
                if (error)
                    console.error(error.message);
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


async function createVisite(DateVisite, IdLogement, IdClient) {
    
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO Logement (DateVisite, IdLogement, IdClient) values (?,?,?);";
        database.getConnection((error, connection) => {
            if(error){
                console.error("Database connection error on createVisite");
                reject(error);
            }
            connection.query(sql, [DateVisite, IdLogement, IdClient], (error) => {
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

async function updateVisite(DateVisite, IdLogement, IdClient) {
    
    let sql = "UPDATE Transaction SET PrixVente=?, IdLogement=?, IdClient=?;";
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on updateVisite", error.message);
    connection.query(sql, [DateVisite, IdLogement, IdClient], (error) => {
        connection.release();
        if (error) {
            console.error(error.message);
            return;
        }
    });
});
}

async function deleteVisite(id) {
    
    let sql = "DELETE FROM Visite WHERE IdVisite=?;";
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on deleteVisite", error.message);
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
    deleteVisite
}