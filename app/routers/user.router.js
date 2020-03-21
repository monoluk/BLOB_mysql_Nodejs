module.exports = (app, router) => {
    const userController = require('../controllers/user.controller.js');
	
	var path = __basedir + '/views/';
	
	router.use((req,res,next) => {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});
	
	//app.post('/api/files/upload', upload.single("uploadfile"), fileController.uploadFile);
	
	app.get('/api/users/getall', userController.listAllFiles);
	
	//app.get('/api/users/:id', userController.downloadFile);

	app.use('/',router);
 
	app.use('*', (req,res) => {
		res.sendFile(path + "404.html");
	});
}