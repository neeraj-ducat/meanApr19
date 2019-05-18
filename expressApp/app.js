// express is imported
const express = require('express');
// body parser is imported
const bodyParser = require('body-parser');
// mongoose is imported
const mongoose = require('mongoose');

// mongoose is connected to the database.
mongoose.connect('mongodb://localhost:27017/ducat');

// User Model is created
const User = mongoose.model('users',{
    name: String,
    mailId: String,
    password: String
  });

// app object is created.
const app = express();

// body-parser middleware is registered to parse json body
app.use(bodyParser.json());

// Method to fetch all users.
app.get('/users',(req, res) => {
    User.find().then((result)=>{
        res.json(result);
    });
});
// Method to fetch a user using mailId
app.get('/users/:mailId',(req, res) => {
    const criteria = req.params['mailId']
    console.log('criteria is: ',criteria);
    User.find({mailId: criteria}).then((result)=>{
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
// Method to update a user
app.put('/users',(req, res) => {
    console.log('Updating: ',req.body);
    //Model object is created for the body
    const user = new User(req.body);
    // Model object is saved.
    user.updateOne({mailId: user.mailId},{$set: {name: user.name}}).then(()=>{
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