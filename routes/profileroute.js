 const Router=require('express').Router();
 const Controller=require('../controller/profilecontoller');
  
 Router.get('/profile',Controller.getProfile)

 module.exports.Router=Router;
