// express is imported
const express = require('express');
// path package is imported.
const path = require('path')
// body parser is imported
const bodyParser = require('body-parser');
// multer is imported 
const multer  = require('multer');
// var to store the path of the uploaded file to return back
var uploaded = 'http://localhost:5000/profileImages/';
var imageUrl ='';
// multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'profileImages/')
    },
    filename: function (req, file, cb) {
        let fname = Date.now() + path.extname(file.originalname);
        imageUrl = uploaded + fname;
      cb(null, fname);
    }
  })
// multer object is created to manage file uploads. 
var upload = multer({ storage: storage })
// cors middleware is imported
const cors = require('cors');
// mongoose is imported
const mongoose = require('mongoose');
// ObjectId class is imported
const ObjectId = mongoose.Types.ObjectId;
// mongoose is connected to the database.
mongoose.connect('mongodb://localhost:27017/ducat');
// User Model is created
const User = mongoose.model('users',{
    name: String,
    mailId: String,
    password: String,
    imageUrl: String
  });

// app object is created.
const app = express();
// cors middleware is registered
app.use(cors());
// Method to process file upload requests.
app.post('/profileImage',upload.single('avatar'),
function(req,res){
  console.log(uploaded+' is uploaded.');
  res.json({'imageUrl':imageUrl});
     //let id = req.body.id;
     //console.log('updating user having id: ',req.body);
     //updating the user
    /*  User.updateOne({_id: new ObjectId(id)},{$set: {'imageUrl': uploaded}}).then(() => {
        
        console.log('updated.');
     }); */
     
});
// Method to return static resources such as images
app.get('/profileImages/*', express.static(__dirname));
// body-parser middleware is registered to parse json body
app.use(bodyParser.json());
// Method to fetch all users.
app.get('/users',function (req, res) {
    User.find().then((result)=>{
        res.json(result);
    });
});
// Method to fetch a user using mailId
app.post('/users/login',(req, res) => {
    criteria = req.body;
    console.log('criteria is: ',criteria);
    User.findOne(criteria).then((result)=>{
        res.json(result);
    });
});
// Method to save a user
app.post('/users',(req, res) => {
    console.log('Saving: ',req.body);
    //Model object is created for the body
    const user = new User(req.body);
    // Model object is saved.
    user.save().then(()=>{
		res.json({"status":"successfully saved."});
		});
    
});
// Method to update imageUrl a user
app.put('/users/profileImage',(req, res) => {
  console.log('Updating: ',req.body);
  let id = req.body.id;
  let url = req.body.profileImage;
  // Model object is saved.
  User.updateOne({_id: new ObjectId(id)},{$set: {'imageUrl': url}}).then(() => {
      console.log('updated.');
      res.json({'status':'updated.'});
 });
});

// Method to update a user
app.put('/users',(req, res) => {
    console.log('Updating: ',req.body);
    //Model object is created for the body
    const user = new User(req.body);
    // Model object is saved.
    User.updateOne({mailId: user.mailId},{$set: {name: user.name, password: user.password}}).then(()=>{
		res.json({"status":"successfully updated."});
		});
});
// Method to delete a user
app.delete('/users/:mailId',(req, res) => {
    const criteria = req.params['mailId']
    console.log('criteria is: ',criteria);
    User.remove({mailId: criteria}).then(()=>{
		res.json({"status":"successfully deleted."});
		});
});
// HTTP server is started 
app.listen(5000, () => {
    console.log('server is started on port 5000');
});