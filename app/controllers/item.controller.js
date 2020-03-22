var stream = require('stream');

const db = require('../config/db.config.js');
const item = db.items;

exports.uploadItem = (req, res) => {
	console.log(req.file)
	item.create({
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then(() => {
		res.send('item uploaded successfully! -> itemname = ' + req.item.originalname);
	})
}

exports.listAllItems = (req, res) => {
	item.findAll({attributes: ['id', 'name']}).then(items => {
	  res.json(items);
	});
}

exports.downloadItem = (req, res) => {
	item.findById(req.params.id).then(item => {
		var itemContents = Buffer.from(item.data, "base64");
		var readStream = new stream.PassThrough();
		readStream.end(itemContents);
		
		res.set('Content-disposition', 'attachment; itemname=' + item.name);
		res.set('Content-Type', item.type);

		readStream.pipe(res);
	})
}