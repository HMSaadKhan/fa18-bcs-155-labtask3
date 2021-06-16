const mongoose= require("mongoose");
const MerchScehema = mongoose.Schema({
    Name:String,
    Anime:String,
    Type:String});
const MerchModel = mongoose.model("data",MerchScehema);
module.exports=MerchModel;