

// module.exports = (app, router, upload) => {

//     const fileController = require('../controllers/file.controller.js');
	
// 	var path = __basedir + '/views/';
	
// 	router.use((req,res,next) => {
// 		console.log("/" + req.method);
// 		next();
// 	});
	
// 	app.get('/', (req,res) => {
// 		res.sendFile(path + "index.html");
// 	});
	
// 	app.post('/api/files/upload', upload.single("uploadfile"), fileController.uploadFile);
	
// 	app.get('/api/files/getall', fileController.listAllFiles);
	
// 	app.get('/api/files/:id', fileController.downloadFile);

// 	app.use('/',router);
 
// 	app.use('*', (req,res) => {
// 		res.sendFile(path + "404.html");
// 	});
// }

const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file.controller.js');
var upload = require('./app/config/multer.config.js');


router.get('/getall', fileController.listAllFiles);

router.post('/upload', upload.single("uploadfile"), fileController.uploadFile);

app.get('/searchfile/:id', fileController.downloadFile);

module.exports = router;