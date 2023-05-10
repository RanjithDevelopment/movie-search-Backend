const mongoose = require('mongoose');

const movieShema = mongoose.Schema({
    moviename:{type:String, required:true, trim:true},
    director:{type:String, required:true, trim:true},
    description:{type:String , required:true, trim:true},
    image:{type:String, required:true, trim:true},
    genre:{type:String, required:true, trim:true},
    production:{type:String, required:true, trim:true}
})

const movieModel = mongoose.model("Data",movieShema);

module.exports=movieModel;