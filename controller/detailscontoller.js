const model=require('../models/productschema')
module.exports.getDetails=(req,res,next)=>{
    res.render('details',{
      title:"Details"
    });
}

module.exports.getProduct=(req,res,next)=>{
  model.findOne({_id:req.params.id}).then((item)=>{
    if(item){
        req.flash('product',item)
        res.render('details',{
          title:"Details",
          product:req.flash('product'),
          session:req.flash("session")
        })
    }
    else{
        console.log("sorry this product not provide now ");
        res.redirect('/')
    }
  }).catch((err)=>{
    console.log(err);
  })
}