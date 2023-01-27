
const Router=require('express').Router();
const Controller=require('../controller/shopcontroller')


Router.get('/products',Controller.getAllProducts);


module.exports.Router=Router;