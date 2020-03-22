var express = require('express');
var cors = require('cors');
var app = express();
var router = express.Router();

 
global.__basedir = __dirname;
 
const db = require('./app/config/db.config.js');

//address cross-server issue 
app.use(cors({
	origin: function(origin, callback){
	  return callback(null, true);
	},
	optionsSuccessStatus: 200,
	credentials: true
  }));

  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

//app.use(express.static('resources'));	

//require('./app/routers/item.router.js')(app, router, upload);
app.use('/users', require('./app/routers/user.router.js'));
app.use('/items', require('./app/routers/item.router.js'));
 
// Create a Server
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})
