//var stream = require('stream');

const db = require('../config/db.config.js');
const User = db.users;


exports.listAllUsers = (req, res) => {
	User.findAll({attributes: ['id','username','useremail','userpassword','blocked','createdAt','updatedAt']}).then(users => {
	  res.json(users);
	});
}

exports.searchUser = (req, res) =>{

	File.findById(req.params.id).then(user => {
		res.json(user);
	})

}