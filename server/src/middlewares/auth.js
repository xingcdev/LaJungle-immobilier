const jwt = require('jsonwebtoken');
const getUser = require('../models/userDAO.js');

const User = getUser("1")

// Check if a user is authorized to access the server resources
const auth = async function (req, res, next) {
	try {
		if (!req.header('authorization')) {
			res
				.status(401)
				.send({ error: "Vous n'êtes pas autorisé(e) à accéder à cette ressource." });
		}

		const token = req.header('authorization').replace('Bearer ', '');
		// Check if the received token was created using our JWT_KEY
		const data = jwt.verify(token, process.env.JWT_KEY);

		// FIXME
		const foundUser = await User.findOne({
			_id: data._id,
			token: token,
		});

		if (!foundUser) throw new Error('Utilisateur introuvable.');

		// Attach the found user on our request
		req.user = foundUser;
		req.token = token;
		next();
	} catch (error) {
		res
			.status(401)
			.send({ error: "Vous n'êtes pas autorisé(e) à accéder à cette ressource." });
		console.error(error);
	}
};

module.exports = {
	auth
}
