const movie = require("../models/movimodel")


module.exports.postdata = async (req,res,next)=>{
try {
    
    let newmovie= await new movie({...req.body})
    await newmovie.save();
    res.status(200).send({msg:"Data Stored succesfully"});
} catch (error) {
    console.log("error in creation", error)
}

}

module.exports.getdatabykeywords = async(req,res,next)=>{
try {
  let keyword= req.query.keywords;
let response = await movie.find({ $or :[ {director:keyword},{moviename:keyword},{production:keyword} ] } );

res.status(200).send(response);

} catch (error) {
    console.log("error in getting Data",error);
}



} 
module.exports.getdata = async(req,res,next) =>{
try {
    let data = await movie.find({});
    res.status(200).send(data);
} catch (error) {
    console.log(error)
}
}