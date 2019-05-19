// express is imported
const express = require('express');
// body parser is imported
const bodyParser = require('body-parser');

// cors middleware is imported
const cors = require('cors');

//users module is imported
const users = require('./users');


// app object is created.
const app = express();
// cors middleware is registered
app.use(cors());
// body-parser middleware is registered to parse json body
app.use(bodyParser.json());

// Method to fetch all users.
app.get('/users',users.allUsers);
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