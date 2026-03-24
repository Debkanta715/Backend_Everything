const express = require('express');
const postModel = require('./model/post.model')
const multer = require('multer');
const uploadFile=require('./services/storage.services');

// middleware for converting the data in express
const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// api

//POST API
app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body);   
    console.log(req.file);   

   const result=await uploadFile(req.file.buffer)
   const post =await postModel.create({
     image:result.url,
     caption: req.body.caption
   })

   return res.status(201).json({
    message:"post create sucessfully ",
    post
   })
    
});


// GET API

app.get('/posts',async(req,res)=>{
    const posts =await postModel.find()
     return res.status(200).json({
    message:"post fetched sucessfully  ",
    posts
   }) 
})

module.exports = app;