var mongoose = require('mongoose'),
passportLocalMongoose = require('passport-local-mongoose');

var postschema = mongoose.Schema({

    author :{
        aid :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        name : String
    },
    productname:String,
    date : String,
    picture : String,
    phnno :String,
    address : String,
    desc : String,
    category:String,
    price : String
})

module.exports = mongoose.model("Post",postschema);