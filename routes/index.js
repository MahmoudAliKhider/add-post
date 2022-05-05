const express = require('express');
const router = express.Router();
const Post = require('../models/Post') 
const bodyParser = require('body-parser');
const { redirect } = require('express/lib/response');

router.use(bodyParser.urlencoded({extended:true}))

router.get('/',(req,res)=>{
    res.render('index')
})
router.post('/',(req,res,next)=>{
 Post.find({},(err,data)=>{
     if(!err)
     {
        let newPost = [
            new Post ({
                name: req.body.name,
                title: req.body.title,
                sub: req.body.sub,
   
            })
        ]
        newPost.forEach((data)=>{
            data.save((err)=>{
                if(!err){
                    console.log(data)
                    res.redirect('/');
                }else{
                    console.log(err)
                }
            })
        })
     }
 })
})
router.get('/get',(req,res, next)=>{
   Post.find({},(err,data)=>{
       if(!err)
       {
           res.render("get",{
               data:data
           })
       }
   })
})

module.exports=router