const db = require('../models/etatHabitationDAO.js');

async function getList(req, res) {
  try {
    let etats = await db.getList();

    if (!etats) {
      res.status(404).json({ data: null, error: 'Aucun état trouvé' });
      return;
    }

    res.status(200).send({
      data: etats.map((element) => ({
        label: element.IdEtat,
        value: element.LibelleEtat,
      })),
      error: null,
    });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
}

module.exports = {
  getList,
};
