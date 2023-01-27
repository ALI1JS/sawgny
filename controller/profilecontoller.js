

module.exports.getProfile=(req,res,next)=>{
    res.render('profile',{
        title:"Profile",
        session:req.flash("session")
    });
}