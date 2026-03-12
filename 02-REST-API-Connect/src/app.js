const express=require('express');

const app=express();

//create 4 api Fatch , get ,patch and delete and check it in post api or hopscoth


//middleware for converting text to json format

app.use(express.json())
const notes=[]


//post api for data give or send in the server
app.post('/notes',(req,res)=>{

    console.log(req.body);

    
notes.push(req.body);
res.status(200).json({
        massaage:"note are created sucessfullly"
    })
    
})



// now for the data fetch or show in the frontend or in page use get 

app.get('/notes',(req, res)=>{

    res.status(200).json({
        massaage:"Notes fatchh sucessfully",
        notes:notes
    })
})


//now for delete the data in the server or frontend delete

app.delete('/notes/:id',(req,res)=>{

    const id= req.params.id

    delete notes[id]


    res.status(200).json({
        massaage:"data deleted sucessfully"
    })
})


// now for update the api by patch 

app.patch('/notes/:id',(req, res)=>{

const id=req.params.id

const description=req.body.description
const title=req.body.title


notes[id].description=description
notes[id].title=title


    res.status(200).json({
        massaage:"data are update sucessfullly"
    })
})


module.exports=app