

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


router.get('/files/getall', fileController.listAllFiles);



module.exports = router;