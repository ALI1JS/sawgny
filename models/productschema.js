const mongoose=require('mongoose');

const Schema=mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:{
            mount:Number,
            size:String,
            color:String,
            desc1:String
        },
        required:true
    },
    price:{
        type:Number,
        required:true
    }    
});

module.exports=mongoose.model('products',Schema)