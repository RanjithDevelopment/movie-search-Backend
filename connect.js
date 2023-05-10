
const mongoose=require("mongoose");
const dotenv = require('dotenv');

//dotenv configuration 
dotenv.config();


db=async()=>{
    try {
        mongoose.set("strictQuery", false);
       const res=await mongoose.connect(process.env.MONGODB_URL);
       console.log("connection is established");
    //    console.log(res);
}
        
     catch (error) {

        console.log('DB Error',error);
        
    }
}
    

module.exports=db;