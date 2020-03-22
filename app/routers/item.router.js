

// module.exports = (app, router, upload) => {

//     const itemController = require('../controllers/item.controller.js');
	
// 	var path = __basedir + '/views/';
	
// 	router.use((req,res,next) => {
// 		console.log("/" + req.method);
// 		next();
// 	});
	
// 	app.get('/', (req,res) => {
// 		res.senditem(path + "index.html");
// 	});
	
// 	app.post('/api/items/upload', upload.single("uploaditem"), itemController.uploaditem);
	
// 	app.get('/api/items/getall', itemController.listAllitems);
	
// 	app.get('/api/items/:id', itemController.downloaditem);

// 	app.use('/',router);
 
// 	app.use('*', (req,res) => {
// 		res.senditem(path + "404.html");
// 	});
// }

const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller.js');
var upload = require('../config/multer.config.js');


router.get('/getall', itemController.listAllItems);

router.post('/upload', upload.single("uploadfile"), itemController.uploadItem);

router.get('/searchitem/:id', itemController.downloadItem);

module.exports = router;