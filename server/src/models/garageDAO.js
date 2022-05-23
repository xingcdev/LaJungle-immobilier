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


async function createGarage(adresse, idLogement) {
    
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO Garage (Adresse, IdLogement) VALUES (?,?);";
        database.getConnection((error, connection) => {
            if(error){
                console.error("Database connection error on createGarage");
                reject(error);
            }
            connection.query(sql, [adresse, idLogement], (error) => {
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

async function updateGarage(Adresse, IdLogement, IdGarage) {
    let parametres = new Array();
    let requete = "UPDATE Garage SET";
    if(req.query.Adresse !== null) {
        requete += " Adresse=?"
        parametres.push(Adresse)
    }
    if(req.query.IdLogement !== null) {
        requete += " IdLogement=?"
        parametres.push(IdLogement)
     }
    requete+=" WHERE IdGarage=?";
    parametres.push(IdGarage)
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on updateGarage", error.message);
    connection.query(sql,parametres, (error) => {
        connection.release();
        if (error) {
            console.error(error.message);
            return;
        }
    });
});
}

async function getGarageFromLogement(idLogement) {
    let sql = "SELECT * FROM Logement WHERE IdLogement=?;";
    database.getConnection((error, connection) =>{
        if(error) console.error("Database connection error on getGarageFromLogement", error.message);
    connection.query(sql, [idLogement], (error) => {
        connection.release();
        if (error) {
            console.error(error.message);
            return;
        }
    });
});
}

module.exports = {
    getGarage,
    createGarage,
    deleteGarage,
    updateGarage,
    getGarageFromLogement
}