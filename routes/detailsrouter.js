const Router=require('express').Router();
const Controller=require('../controller/detailscontoller')

Router.get('/details',Controller.getProduct);
Router.get('/details/:id',Controller.getProduct);

module.exports.Router=Router;