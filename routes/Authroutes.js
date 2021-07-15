var express = require("express"),
    router = express.Router(),
    User = require('../models/User'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    bodyParser = require('body-parser')

router.use(require('express-session')({
    secret: "Secret isn't meant to be told",
    resave: false,
    saveUninitialized: false

}));
router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
router.use(bodyParser.urlencoded({ extended: true }));
router.get("/", (req, res) => {
    res.render('Landingpage')
})



router.post("/signup",function(req,res)
{
    User.register(new User({username : req.body.username,email:req.body.email}),req.body.password,function(err,user)
    {
        if(err){
            console.log(err)
            req.flash("error",err.message)
            return res.render("Login")
        }

        passport.authenticate("local")(req,res,function()
        {console.log("registered")
            // {   req.flash("success","Successfully registered")
            req.flash("success","Successfully registered")
                res.redirect("/");
            }
        )
    })
})


router.get('/login', (req, res) => {
    res.render('Login',{message : req.flash("error")})
})

router.post('/login', passport.authenticate("local",{
    successRedirect: "/",
    failureRedirect: "/login"

}),(req, res) => {
console.log("logged in")
req.flash("success","successfully loggedin,welcome "+ currentUser.username)
})

router.get("/logout",function(req,res)
{    
    req.flash("success","Successfully logged out")
    req.logout();
    res.redirect("/");
})

module.exports = router;