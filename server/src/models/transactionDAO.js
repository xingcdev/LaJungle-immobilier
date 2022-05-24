const database = require('../helpers/dbconnect.js');

async function getTransaction(id) {
    
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM Visite WHERE IdTransaction=?;";
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

async function createTransaction(prixVente, pourcentageCommission, idLogement, idClient) {

    return new Promise((resolve, reject) => {
        let sql =
            "INSERT INTO Transaction (PrixVente, PourcentageCommission, IdLogement, IDClient) values (?,?,?,?);";
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
                        console.log("Transaction ajoutée");
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


async function updateTransaction(prixVente, pourcentageCommission, IdLogement, IdClient, IdTransaction) {
    let parametres = new Array();
    let requete = "UPDATE Transaction SET";
    if(req.query.prixVente !== null) {
        requete += " prixVente=?"
        parametres.push(prixVente)
    }
    if(req.query.pourcentageCommission !== null) {
        requete += " pourcentageCommission=?"
        parametres.push(pourcentageCommission)
     }
    if(req.query.IdLogement !== null) {
        requete += " IdLogement=?"
        parametres.push(IdLogement)
    }
    if(req.query.IdClient !== null) {
        requete += " IdClient=?"
        parametres.push(IdClient)
    }
    requete+=" WHERE IdTransaction=?";
    parametres.push(IdTransaction)
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on updateTransaction", error.message);
    connection.query(requete, parametres, (error) => {
        connection.release();
        if (error) {
            console.error(error.message);
            return;
        }
    });
});
}

async function deleteTransaction(id) {
    
    let sql = "DELETE FROM Transaction WHERE IdTransaction=?;";
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on deleteTransaction", error.message);
    connection.query(sql, [id], (error) => {
        connection.release();
        if (error) {
            console.error(error.message);
            return;
        }
    });
});
}

async function getAllTransactions() {
    
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM Transaction;";
        database.getConnection((error, connection) => {
            if (error)
                reject(error);
            connection.query(sql, [], (error, results) => {
                console.log(results);
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

module.exports = {
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getAllTransactions
}