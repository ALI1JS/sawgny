const Router=require('express').Router();
const productModel=require('../models/productschema');
const Cartmodel=require('../models/cartmodel');

Router.get("/shoppingcart",(req,res,next)=>{
  res.render("cart",{
    title:"My Cart",
    session:req.flash("session"),
    productcart:req.flash('productCart')
  })
})

 
Router.get('/shoppingcart/:id',(req,res,next)=>{

  productModel.findById({_id:req.params.id}).then((product)=>{
    
    if(product){
      req.flash("productCart",product);
      const Cart=new Cartmodel({
        productId:product._id
      })
      res.redirect('/')
       
    }
    else{
      console.log("ths product not found !");
    }
  }).catch((err)=>{
    console.log(err)
  })   
})


module.exports.Router=Router;