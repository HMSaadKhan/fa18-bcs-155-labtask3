const MerchProduct = require('./Models/merchdata');
const CreateMerch = async(Name, Anime, Type )=> {
    console.log("created");
    let product = new MerchProduct();
    product.Name=Name;
    product.Anime=Anime;
    product.Type= Type; 
    await product.save();
    return product;

};

module.exports.CreateMerch = CreateMerch;