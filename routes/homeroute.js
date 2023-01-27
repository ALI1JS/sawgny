const Router=require('express').Router();
const controlle=require('../controller/homecontoller')

Router.get('/',controlle.getHome)


module.exports.Router=Router;