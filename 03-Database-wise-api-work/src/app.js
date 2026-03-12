const express = require('express');
// const mongoose=require('./DB/db');
const postModel = require('./model/post.model')
const multer = require('multer');
const uploadFile=require('./services/service');


const app=express();


app.use(express.json())



module.exports=app

