const mongoose =require("mongoose");
const url ="mongodb://localhost:27017/instagram";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.error("not connected to db",err);
})
const crudSchema = mongoose.Schema({
    username:{
        type:String
       },
       password:{
        type:String
       }
       
})
const  data =mongoose.model("insta",crudSchema)
module.exports=data;
