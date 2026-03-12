const mongoose =require ('mongoose');



async function ConnectDb(params) {

    await moongoose.Connec(process.env.MONGO_URI)
    console.log("Connect to DB");


    
}

module.exports=moongoose