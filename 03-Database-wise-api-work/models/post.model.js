const model=require('mongoose');


const postSchema=new mongoose.schema({
  title:String,
  desciption:String,
})
    
const postModel=mongoose.model("post",postSchema)

module.exports=postModel
