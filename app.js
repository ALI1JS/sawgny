const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const sessionStorage=require('express-mongodb-session')(session);
const flash=require('connect-flash');
// const passport=require('passport')
// custom modules:
const HomeRouter=require('./routes/homeroute');
const Signup=require('./routes/auth');
const Shop=require('./routes/shoprouter');
const Details=require('./routes/detailsrouter');
const  Profile  = require('./routes/profileroute');
const  Cart  = require('./routes/cartrouter');

const app=express();

//prepare the port:
const port=process.env.PORT||3000;
// if(process.env.PORT=='test') app.set('port',3000);
// else app.set('port',process.env.PORT||3001);

//connection with database
mongoose.connect('mongodb://0.0.0.0:27017/ECommerce',(err)=>{
    if(err)console.log(err);
    else console.log('the server connected with mongodb');
})

//view engine
app.set('view engine','ejs');

//static folder:
app.use(express.static(path.join(__dirname,'public')));

//body_parser:
app.use(express.urlencoded({extended:false}));
app.use(express.json())
// session and cookie and flash settings:

app.use(cookieParser());
app.use(session({
    secret:'ecommercewebsitefullstack',
    saveUninitialized:false,
    resave:false,
}));
app.use(flash());

//passport:
// app.use(passport.initialize());
// app.use(passport.session());

//bootstrap and jquery:
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


//routers:
app.use(HomeRouter.Router);
app.use(Signup.Router);
app.use(Shop.Router);
app.use(Details.Router);
app.use(Profile.Router);
app.use(Cart.Router)


app.listen(port,()=>{
    console.log(`the server open on port ${port} the url http://localhost:${port}`);
})



