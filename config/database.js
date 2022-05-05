const mongoose = require('mongoose');
const url= 'mongodb://0.0.0.0:27017/subDB';

mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("database connected");

    }

})