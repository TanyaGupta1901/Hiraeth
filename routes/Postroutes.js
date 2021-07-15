require("dotenv").config();
var express = require("express"),
router = express.Router(),
Post = require('../models/Post'),
cloudinary = require('cloudinary').v2;
require("../handlers/cloudinary")
upload = require('../handlers/multer'),



router.get("/addpost",(req,res)=>{
    if(!req.user)   
    return res.redirect("/login");
    

    res.render("Addpost")
})

router.post("/addpost",upload.single("picture"),async (req,res)=>{
   
    
 const result = await cloudinary.uploader.upload(req.file.path)
          url=result.url
console.log(req.user._id)
    Post.create({
    productname : req.body.productname,
    author : {
        aid : req.user._id,
        name : req.user.username
    },
    picture : url,
    phnno:req.body.phnno,
    address:req.body.address,
    price : req.body.price,
desc:req.body.desc,
category:req.body.category
},(err,created)=>{
    
    if(err)
    console.log(err)
    else
    {
    console.log(created)
    res.redirect(`/show/${created._id}`)}
    })
})



router.get("/show/:id",(req,res)=>{
    Post.findById(req.params.id,(err,found)=>{
        if(err)
        console.log(err)
        else
        {
            console.log(found)
        res.render("show",{post:found})
    }
    })
})

router.get("/clothes",(req,res)=>{
    Post.find({category:"Clothes"},(err,find)=>{
        if(err)
        console.log(err)
        else
        res.render("Category",{found : find,title:"Clothes"})
    })
})

router.get("/pottery",(req,res)=>{
    Post.find({category:"Pottery"},(err,find)=>{
        if(err)
        console.log(err)
        else
        res.render("Category",{found : find,title:"Pottery"})
    })
})
router.get("/handicraft",(req,res)=>{
    Post.find({category:"Handicraft"},(err,find)=>{
        if(err)
        console.log(err)
        else
        res.render("Category",{found : find,title : "Handicraft"})
    })
})

router.get("/myposts",(req,res)=>{

    if(!req.user)
    return res.redirect("/login");

    Post.find({"author.aid":req.user._id},(err,found)=>{
        if(err)
        console.log(err)
        else{
            res.render("Category",{found:found,title :"Welcome, "+req.user.username })
       }
    })
})

router.delete("/delete/:id",(req,res)=>{
    Post.findByIdAndDelete(req.params.id,(err,friend)=>{
        if(err)
        console.log(err)
        else
        res.redirect("/")
    })
})

router.get("/support",(req,res)=>{
    if(!req.user)   
    return res.redirect("/login");
    
    res.render("support");
})

router.get("/view/:id",(req,res)=>{
    Post.find({"author.aid":req.params.id},(err,found)=>{
        if(err)
        console.log(err)
        else{
            res.render("profile",{found:found,title :"Welcome"})
       }
    })
})

router.get("/blogs",(req,res)=>{
    res.render("Blogs")
})

module.exports = router;