//var stream = require('stream');

const db = require('../config/db.config.js');
const User = db.users;


exports.listAllUsers = (req, res) => {
	console.log("listallUsers was called****")
	User.findAll({attributes: ['id']}).then(users => {
	  res.json(users);
	});
}