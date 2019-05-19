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

function allUsers(req, res) {
    User.find().then((result)=>{
        res.json(result);
    });
}
module.exports.allUsers = allUsers;