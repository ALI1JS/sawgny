const Router=require('express').Router();
const Controller=require('../controller/auth.controller');
const {check,validationResult}=require('express-validator')

Router.get('/signup',Controller.getHome)
Router.post('/signup',[
    check('username').not().isEmpty().withMessage('enter username'),
    check('username').isLength({min:5,max:10}).trim().withMessage('username must be between 5 and 10 char'),
    check('email').not().isEmpty().withMessage('enter your email please'),
    check('email').isEmail().trim().withMessage('this email not valid '),
    check('password').not().isEmpty().withMessage('enter your password'),
    check('password').isLength({min:8,max:15}).trim().withMessage("password must be between 8 and 15 char"),
    check('confirm-password').custom((value,{req})=>{
        if(value!==req.body.password){
           throw new Error('password and confirm password is not matched')
        }
        return true
    })
],
Controller.creatAcount)

Router.get('/login',Controller.getLogin);
Router.post('/login',[
    check('email').not().isEmpty().withMessage('enter your email please'),
    check('email').isEmail().trim().withMessage('this email not valid '),
    check('password').not().isEmpty().withMessage('enter your password'),
    check('password').isLength({min:8,max:15}).trim().withMessage("password must be between 8 and 15 char")
],Controller.postLogin)



Router.post('/deleteacount',Controller.deleteAcount)
module.exports.Router=Router;