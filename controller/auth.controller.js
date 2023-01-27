const model=require('../models/usersmodel');
const {check,validationResult, Result}=require('express-validator')
const bcrypt=require('bcrypt');


module.exports.getHome=(req,res,next)=>{
    res.render('signup',{
        title:"signup",
        nousermsg:req.flash('nousermsg'),
        session:req.flash("session")
    })
}

module.exports.creatAcount=(req,res,next)=>{
   
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        res.redirect('/signup')
    }
    else{
        //if email exit or not 
        model.findOne({email:req.body.email},(err,result)=>{
            if(err)console.log(err)
            else{
                if(result){
                    console.log(result)
                    req.flash('nousermsg','This email Already exist ');
                    res.render('signup',{
                        title:"signup",
                        nousermsg:req.flash('nousermsg'),
                        session:req.flash("session")
                    })
                }
                else{
                      bcrypt.hash(req.body.password,10,(err,hashpassword)=>{
                        const user=new model({
                            username:req.body.username,
                            password:hashpassword,
                            email:req.body.email  
                        }) 

                        
                        const errors=validationResult(req);
                        if(!errors.isEmpty()){
                             req.flash('validerror',errors.errors)
                             console.log(errors.errors)
                        }
                        user.save((err,result)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                                res.redirect('/login')
                            }  
                    })   
                      })
                    
                }
            }
        })
    }
      

        
    
}

// login page :get and post
module.exports.getLogin=(req,res,next)=>{
    res.render('login',{
        title:'Login',
        session:req.flash("session")    
    })
}
module.exports.postLogin=(req,res,next)=>{
    model.findOne({email:req.body.email},(err,authuser)=>{
        if(err){
            console.log(err)
        }
        else{
            if(authuser){
                bcrypt.compare(req.body.password,authuser.password,(err,same)=>{
                    if(!same){
                        console.log("please enter the correct password !");
                        res.redirect('/login')
                    }
                    else{
                        console.log(authuser)
                        req.session.userId=authuser._id;
                        req.flash('session',req.session.userId)
                        res.render('profile',{
                            title:"Profile",
                            userinfo:authuser,
                            session:req.flash("session")
                        })
                    }
                })
                console.log(authuser);
            }
            else{
                console.log("no user exist you can create a count")
                res.redirect('/login')
                
            }
        }
    })
}

module.exports.deleteAcount=(req,res,next)=>{
    model.findOneAndRemove({_id:req.session.userId}).then((user)=>{
        req.session.destroy();
        if(user){
            console.log(user)
             res.redirect('/signup')
        }
        else{
            console.log("no user deleted")
            res.redirect('/profile')
        }
    }).catch(err=>console.log(err))    
}