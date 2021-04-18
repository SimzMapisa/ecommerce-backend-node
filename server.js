const express = require ('express')
const expressValidator = require('express-validator')
const mongoose = require ('mongoose')
// const bodyParser = require('body-parser');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

require('dotenv').config();

// Importing routes from user routes

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


// Initializing the App
const app = express()



// Database Connection

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Database connected'))
.catch(err => console.log(err.message))


// Middleware

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());


// Routes Middleware

app.use('/api',authRoutes);
app.use('/api',userRoutes);

const Port = process.env.PORT || 8000;

app.listen(Port, (req, res)=> {
    console.log(`server is running on ${Port}`)
})