const express = require('express');
const router = express.Router();
const cafe= require('../model/cafe');
const auth = require('../auth');

router.get('/all',(req,res,next)=>{
   
    cafe.find({},(err,callbacks)=>{
        if(err){
            let err= new Error("could not hash password");
            err.status=500;
            return next(err);
        }
        res.json(callbacks);
    }) ;


});
router.post('/create',auth.verifyAdmin,(req,res,next)=>{
    cafe.create({
        name:req.body.name,
        address: req.body.address,
        cafetype:req.body.cafetype,
        deliveryhour:req.body.deliveryhour
    }).then((callbacks)=>{
        res.json({ status:"cafe created"});
    }).catch(next);
})
module.exports = router;