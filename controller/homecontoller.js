const model=require('../models/productschema');

module.exports.getHome=(req,res,next)=>{
    model.find((err,result)=>{
        if(err)console.log(err)
        else{
            res.render('index',{
                title:"Home",
                products:result,
                session:req.flash("session")
            })
        }
    }) 
}