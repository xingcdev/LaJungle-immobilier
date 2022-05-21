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

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction
}