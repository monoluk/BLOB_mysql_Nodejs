//var stream = require('stream');

const db = require('../config/db.config.js');
const User = db.files;


exports.listAllUsers = (req, res) => {
	File.findAll({attributes: ['id']}).then(files => {
	  res.json(files);
	});
}