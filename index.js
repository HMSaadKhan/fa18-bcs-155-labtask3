const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {CreateMerch} = require('./MerchOperations');
app.use(express.json());

mongoose.connect("mongodb://localhost/merchstore",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(async ()=> {
  console.log("connection created");
 let product= await CreateMerch('akatsuki T-shirt','Naruto','shirt');
 console.log(product);
}).catch(err=>{
  console.log("error created");
  console.log(err);
})

app.listen(3000)

