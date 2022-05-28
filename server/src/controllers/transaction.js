const db = require('../models/transactionDAO.js');

async function getTransaction(req, res) {
  let id = req.query.id;

  if (!id) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  try {
    let transaction = await db.getTransaction(id);

    if (!transaction) {
      res.status(404).send({ data: null, error: 'Transaction non trouvée' });
      return;
    }

    res.status(200).send({
      data: transaction.map((element) => ({
        idTransaction: element.IdTransaction,
        prixVente: element.PrixVente,
        pourcentageCommission: element.PourcentageCommission,
        idLogement: element.IdLogement,
        idClient: element.IdClient,
      }))[0],
      error: null,
    });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function getAllTransactions(req, res) {
  try {
    let transactions = await db.getAllTransactions();

    if (transactions) {
      res.status(200).send({
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
      res.status(200).send({ data: null, error: 'Transactions non trouvées' });
    }
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function updateTransaction(req, res) {
  if (!req.body.id) {
    res.status(400).json({ data: null, error: 'id non défini' });
    return;
  }

  try {
    db.updateTransaction(
      req.body.id,
      req.body.prixVente,
      req.body.pourcentageCommission,
      req.body.idLogement,
      req.body.idClient
    );
    res.status(200).send({ data: req.body, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

async function deleteTransaction(req, res) {
  if (!req.body.id) {
    res.status(400).send({ data: null, error: 'id non défini' });
  }

  try {
    await db.deleteTransaction(req.query.id);
    res.status(200).send({ data: req.body, error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

module.exports = {
  getTransaction,
  getAllTransactions,
  updateTransaction,
  deleteTransaction,
};
