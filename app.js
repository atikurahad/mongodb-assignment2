const express = require('express');
const app = express();
// const dotenv = require('dotenv');
require("dotenv").config();
const router = require("./src/Routes/api");

//importing security middlewares
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const { rateLimit } = require('express-rate-limit');



const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: 'draft-7', // draft-6: RateLimit-* headers; draft-7: combined RateLimit header
	legacyHeaders: false, // X-RateLimit-* headers
	// store: ... , // Use an external store for more precise rate limiting
})


//implementations of security middlewares.

app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(limiter);





//implementation of routes
app.use("/api",router);


//implementation if undefined route
app.use("*" , (req,res) =>{
    res.status(404).json({message:"Fail",data:"Not Found"});
});






module.exports = app ;