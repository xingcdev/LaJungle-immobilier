const db = require('../models/transactionDAO.js');

async function getTransaction(request, response) {
  let ID = request.query.id || request.transaction?.id;

  if (ID === null) {
    response.status(404).json({ msg: 'ID cannot be null' });
    return;
  }

  let transaction = await db.getTransaction(ID);

  if (transaction === null) {
    response.status(404).json({ msg: 'Transaction non trouvée' });
    return;
  }

  if (transaction === undefined) {
    response.status(404).json({ msg: 'Transaction non trouvée' });
  }

  transaction = transaction[0];

  let Transaction = {
    idTransaction: transaction.IdTransaction,
    prixVente: transaction.PrixVente,
    pourcentageCommission: transaction.PourcentageCommission,
    idLogement: transaction.IdLogement,
    idClient: transaction.IdClient,
  };

  response.json(Transaction);
}

async function getAllTransactions(request, response) {
  try {
    let transactions = await db.getAllTransactions();

    if (transactions) {
      response.status(200).send({
        data: transactions.map((element) => ({
          idTransaction: element.IdTransaction,
          prixVente: element.PrixVente,
          pourcentageCommission: element.PourcentageCommission,
          idLogement: element.IdLogement,
          idClient: element.idClient,
        })),
        error: null,
      });
    } else {
      response
        .status(200)
        .send({ data: [], error: 'Transactions non trouvées' });
    }
  } catch (error) {
    res.status(500).send({ data: [], error });
  }
}

async function updateTransaction(req, res) {
  let IdTransaction = req.body.idTransaction;
  let PrixVente = req.body.prixVente;
  let PourcentageCommission = req.body.pourcentageCommission;
  let IdLogement = req.body.idLogement;
  let IdClient = req.body.idClient;

  db.updateTransaction(
    req.transaction.id,
    IdTransaction,
    PrixVente,
    PourcentageCommission,
    IdLogement,
    IdClient
  );
  res.status(200).json({ msg: 'OK' });
}

async function deleteTransaction(req, res) {
  await db.deleteTransaction(req.query.id);
  res.json({ error: 'Transaction supprimée' });
}

module.exports = {
  getTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
};
