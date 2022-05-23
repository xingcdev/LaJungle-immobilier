const database = require('../helpers/dbconnect.js');

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


async function updateTransaction(prixVente) {
    
    let sql = "UPDATE Transaction SET PrixVente=?;";
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on updateTransaction", error.message);
    connection.query(sql, [prixVente], (error) => {
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

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction
}