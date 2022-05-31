const db = require('../models/typeLogementDAO.js');

async function getList(req, res) {
  try {
    let types = await db.getList();

    if (!types) {
      res.status(404).json({ data: null, error: 'Aucun type trouvé' });
      return;
    }

    res.status(200).send({
      data: types.map((element) => ({
        label: element.IdType,
        value: element.LibelleType,
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
