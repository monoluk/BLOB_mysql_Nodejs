// module.exports = (app, router) => {
//     const userController = require('../controllers/user.controller.js');
	
// 	var path = __basedir + '/views/';
	
// 	router.use((req,res,next) => {
// 		console.log("/" + req.method);
// 		next();
// 	});
	
// 	app.get('/', (req,res) => {
// 		res.sendFile(path + "index.html");
// 	});
	
// 	//app.post('/api/files/upload', upload.single("uploadfile"), fileController.uploadFile);
	
// 	app.get('/api/users/getall', userController.listAllUsers);
	
// 	//app.get('/api/users/:id', userController.downloadFile);

// 	app.use('/',router);
 
// 	app.use('*', (req,res) => {
// 		res.send("path not found");
// 	});
// }

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.get('/', (req, res)=>{
	console.log('User route is called')
	res.send('USERS')
})

router.get('/getAll', userController.listAllUsers);

router.get('/searchUser/:id', userController.searchUser);

module.exports = router;