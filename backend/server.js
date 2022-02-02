const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const secretKey = process.env.STRIPE_SECRET_KEY;
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 3000
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const mongoose = require('mongoose')
app.use(express.json());

const PORT = process.env.PORT || 3000;


var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));


const workoutRouter = require('./routes/app.routes')
const usersRouter = require('./routes/users.routes')
const checkoutRouter = require('./routes/checkout.routes')
app.use('/tutorials', workoutRouter);
app.use('/users', usersRouter);
app.use('/checkout', checkoutRouter)



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection ok");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


