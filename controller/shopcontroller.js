

const model=require('../models/productschema');

module.exports.getAllProducts=(req,res,next)=>{

      if(req.session.userId){
        console.log("there are userId "+req.body.userId)
        model.find((err,result)=>{
            if(err)console.log(err)
            else{
                res.render('index',{
                    title:"shop",
                    products:result,
                    session:req.flash("session")
                })
            }
        })
      }
      else{
        console.log("there are not userId ");
        res.redirect('/login')
      } 
}

