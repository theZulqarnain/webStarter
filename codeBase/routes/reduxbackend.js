const express =require('express');
const router = express.Router();
const User = require('../models/reduxbackend');
 router.post('/create',(req,res)=>{
     console.log(req.body)
     var newUser = new User({todo:req.body.todo,
     id:req.body.id});
     newUser.save((err)=>{
         if(err){
             console.log(err)
         }
         console.log("saved successfully")
     });
     res.json({success:true})
 });
 router.get('/retrieve',(req,res)=>{
    User.find({},(err,todos)=>{
        res.json({todos:todos});
    })
 });
 router.get('/retrieve/:id',(req,res)=>{
     User.findById({_id:req.params.id},function(err, todo) {
             if (err) {
                 res.status(500).send({message: "Could not retrieve note with id " + req.params.noteId});
             } else {
                 res.json({todo});
             }
         }
     )
 });
 router.post('/update/:id',(req,res)=>{
     User.findOneAndUpdate(
     {_id:req.params.id},{$set:req.body},{new:true},(err,data)=>{
        if(err){
            res.json({err})
        }
        res.json({data})
     }
     )
 });
 router.post('/delete/:id',(req,res)=>{
    User.findOneAndRemove({_id:req.params.id},(err,todo)=>{
        if(err){
            res.json({err})
        }
        res.json({todo})
    })
 });
 module.exports  =router;