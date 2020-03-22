module.exports = (sequelize, Sequelize) => {
	const Item = sequelize.define('item', {
	  type: {
		type: Sequelize.STRING
	  },
	  name: {
		type: Sequelize.STRING
	  },
	  data: {
		type: Sequelize.BLOB('long')
	  }
	});
	
	return Item;
}