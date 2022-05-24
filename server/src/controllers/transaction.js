const db = require("../models/transactionDAO.js");

async function getTransaction(request, response) {
    let ID = request.query.id || request.transaction?.id;

    if (ID === null) {
        response.status(404).json({ msg: "ID cannot be null" });
        return;
    }

    let transaction = await db.getTransaction(ID);

    if (transaction === null) {
        response.status(404).json({ msg: "Transaction non trouvée" });
        return;
    }

    if (transaction === undefined) {
        response.status(404).json({ msg: "Transaction non trouvée" });
    }

    transaction = transaction[0]

    let Transaction = {
        IdTransaction : transaction.IdTransaction,
        PrixVente : transaction.PrixVente,
        PourcentageCommission : transaction.PourcentageCommission,
        IdLogement : transaction.IdLogement,
        IdClient : transaction.IdClient
    };

    response.json(Transaction);
}


async function getAllTransactions(request, response) {
    let transactions = await db.getAllTransactions();

    if (transactions === null) {
        response.status(404).json({ msg: "Transactions non trouvées" });
        return;
    }

    if (transactions === undefined) {
        response.status(404).json({ msg: "Transactions non trouvées" });
    }

    transactionList = []

    transactions.forEach(element => {
        let log = {
            IdTransaction : element.IdTransaction,
            PrixVente : element.PrixVente,
            PourcentageCommission : element.PourcentageCommission,
            IdLogement : element.IdLogement,
            IdClient : element.IdClient
        }
        transactionList.push(log);
    });

    response.json(transactionList);
}

async function updateTransaction(req, res) {
    let IdTransaction = req.body.IdTransaction;
    let PrixVente = req.body.PrixVente;
    let PourcentageCommission = req.body.PourcentageCommission;
    let IdLogement = req.body.IdLogement;
    let IdClient = req.body.IdClient;

    db.updateTransaction(
        req.transaction.id,
        IdTransaction,
        PrixVente,
        PourcentageCommission,
        IdLogement,
        IdClient
    );
    res.status(200).json({ msg: "OK" });
}

async function deleteTransaction(req, res) {
    await db.deleteTransaction(req.transaction.id);
    res.json({ message: "Transaction supprimée" });
}

module.exports = {
    getTransaction,
    getAllTransactions,
    updateTransaction,
    deleteTransaction
};