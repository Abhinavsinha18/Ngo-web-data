const express = require('express');
// const Razorpay = require('razorpay');
const connect = require('./db')

 const cors = require('cors');

 const jwt = require('jsonwebtoken');
 const userRoute = require('./Route/User.route')
 const router = require('./Route/Router')
const bodyParser = require('body-parser');
const Postrouter = require('./Route/post.route');
 const app = express();

 app.use(cors());
 app.use(bodyParser.json({limit : "30mb", extended : true}))
 app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
 app.use(express.json())


 app.use('/',router);
 app.use('/user',userRoute);
 app.use('/post',Postrouter);

 

 


app.listen(5000,async()=>{
try {
    await connect;
    console.log("Connected");
} catch (error) {
    console.log(error);
}

    console.log("server is listining " );
})

// module.exports = instance;