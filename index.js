
// mongodb+srv://TGDataB:<password>@projecthtne.vitfm.mongodb.net/test

require('dotenv').config()


var express = require('express'),
    app = express(),
    path = require('path')
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodoverride = require("method-override"),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require("./models/User"),
    postroutes = require("./routes/Postroutes"),
    userroutes = require("./routes/Authroutes"),
    require("./handlers/cloudinary"),
    password = process.env.mongopassword,
    port = process.env.Port || 3000;

    
app.use(flash());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.use(flash());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

app.use(require('express-session')({
    secret : "Secret isn't meant to be told",
    resave : false,
    saveUninitialized : false
    
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(`mongodb+srv://TGDataB:${password}@projecthtne.vitfm.mongodb.net/test`,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
    console.log("connected to mongoDB")
})

app.use(function(req,res,next)
{
 res.locals.currentUser=req.user;
 res.locals.error   = req.flash("error");
 res.locals.success = req.flash("success");
 next();
});



app.use(postroutes)
app.use(userroutes)
app.listen(3000,()=>{
    console.log("we are live")
})