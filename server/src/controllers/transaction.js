const db = require('../models/transactionDAO.js');

async function getTransaction(request, response) {
  let id = request.query.id;

  if (!id) {
    response.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  let transaction = await db.getTransaction(id);

  if (!transaction) {
    response.status(404).json({ data: null, error: 'Transaction non trouvée' });
    return;
  }

  transaction = transaction[0];

  let Transaction = {
    idTransaction: transaction.IdTransaction,
    prixVente: transaction.PrixVente,
    pourcentageCommission: transaction.PourcentageCommission,
    idLogement: transaction.IdLogement,
    idClient: transaction.IdClient,
  };

  response.status(200).send({ data: Transaction, error: null });
}

async function getAllTransactions(request, response) {
  try {
    let transactions = await db.getAllTransactions();

    if (transactions) {
      response.status(200).send({
        // PascalCase vers camelCase
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
        .send({ data: null, error: 'Transactions non trouvées' });
    }
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function updateTransaction(req, res) {
  if (!request.body.id) {
    response.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  db.updateTransaction(
    req.body.id,
    req.body.prixVente,
    req.body.pourcentageCommission,
    req.body.idLogement,
    req.body.idClient
  );
  res.status(200).send({ data: req.body, error: null });
}

async function deleteTransaction(req, res) {
  await db.deleteTransaction(req.query.id);
  res.status(200).send({ error: null });
}

module.exports = {
  getTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
};
