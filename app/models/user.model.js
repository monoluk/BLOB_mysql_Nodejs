module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		  },
		  username: {
			type: Sequelize.STRING(35),
			allowNull: false,
			unique: true
		  },
		  useremail: {
			type: Sequelize.STRING(35),
			allowNull: false,
			unique: true
		  },
		  userpassword: {
			type: Sequelize.STRING(20),
			allowNull: false
		  },
		  blocked: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		  }
	});
	
	return User;
}