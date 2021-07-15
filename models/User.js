var mongoose = require('mongoose'),
passportLocalMongoose = require('passport-local-mongoose');

var userschema = new mongoose.Schema({
    username : String,
    password : String,
    email:String,
    posts :[{
        type : mongoose.Schema.Types.ObjectId,
        
    }]
})

userschema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userschema);