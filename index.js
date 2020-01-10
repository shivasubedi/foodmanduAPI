const express =require('express');
const mongoose= require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const userRouter= require('./routes/user_routes');
const uploadRouter = require('./routes/uploads');
const cafeRouter = require('./routes/cafe');
const itemsRouter = require('./routes/item');
const router = express.Router();

const app = express();
app.use(express.json());
app.options('*',cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public/uploads"));

//mongoose connection 
mongoose.connect(process.env.URL,{useNewUrlParser:true, useUnifiedTopology:true})
        .then((db)=>{
            console.log("Succefully connected to DB server");
        },
        (err)=>{
            console.log(err);
        });

app.use('/users',userRouter);
app.use('/uploads',uploadRouter);
app.use('/cafe',cafeRouter);
app.use('/item',itemsRouter);

        
//servier hosting 
app.listen(process.env.PORT,()=>{
    console.log(`App is running on port: ${process.env.PORT}`);
})