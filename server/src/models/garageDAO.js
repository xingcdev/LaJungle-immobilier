const database = require('../helpers/dbconnect.js');

async function getGarage(id) {
    
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM Garage WHERE IdGarage=?;";
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


async function createGarage(adresse) {
    
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO Garage (Adresse) VALUES (?);";
        database.getConnection((error, connection) => {
            if(error){
                console.error("Database connection error on createGarage");
                reject(error);
            }
            connection.query(sql, [adresse], (error) => {
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

async function deleteGarage(id) {
    
    let sql = "DELETE FROM Garage WHERE IdGarage=?;";
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on deleteGarage", error.message);
    connection.query(sql, [id], (error) => {
        connection.release();
        if (error) {
            console.error(error.message);
            return;
        }
    });
});
}