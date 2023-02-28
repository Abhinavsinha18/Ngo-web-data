const express = require('express');
// const Razorpay = require('razorpay');
const connect = require('./db')

 const cors = require('cors');

 const jwt = require('jsonwebtoken');
 const router = require('./Route/Router')
const bodyParser = require('body-parser');
 const app = express();

 app.use(cors());
 app.use(bodyParser.json({limit : "30mb", extended : true}))
 app.use(bodyParser.urlencoded({limit : "30mb", extended : true}))
 app.use(express.json())


 app.use('/',router);

 


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