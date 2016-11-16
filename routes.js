/*var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
}, {collection: "user"});

var User = mongoose.model("User", UserSchema);
app.post("/routes/login", function(rea, res){
	var user = req.body;
	User.findOne({username: user.username})

});

app.post("/routes/register", function(req, res){
	var user = rq.body;
	User.findOne({username: user.username}, function(err, existingUser){
		if(existingUser == null)
	});

});


module.exports = function (app){
	var multer = require('multer');
	var upload = multer({dest: __dirname+'/../components/ResumeAnalytics/uploads'});
	app.post("/api/upload", upload.single('myFile'), uploadImage);
	function uploadImage(req,res){
		var widgetId = req.body.widgetId;
		var width = req.body.width;
		var myFile = req.file;

		var originalname = myFile.originalname;
		var filename     = myFile.filename;
		var path         = myFile.path;
		var destination  = myFile.destination;
		var size         = myFile.size;
		var mimetype     = myFile.mimetype;
	}
}*/