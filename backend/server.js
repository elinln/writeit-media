const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const secretKey = process.env.STRIPE_SECRET_KEY;
const bodyParser = require("body-parser")
const cors = require("cors")
const port = process.env.PORT || 3000

/*const whitelist = ["http://localhost:3000"]
/*const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))*/



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post("/payment", cors(), async (req, res) => {
    let { amount, id } = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "SEK",
            description: "Write It Media",
            payment_method: id,
            confirm: true
        })
        console.log("Payment", payment)
        res.json({
            message: "Payment successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment failed",
            success: false
        })
    }
})

/*app.listen(process.env.PORT || 3000, () => {
    console.log("Sever is listening on port 3000")
}) */


const mongoose = require('mongoose')
require('dotenv').config();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: "http://localhost:3001"
};

app.use(cors(corsOptions));


const db = require("./models");

const workoutRouter = require('./routes/app.routes')
const usersRouter = require('./routes/users.routes')
app.use('/tutorials', workoutRouter);
app.use('/users', usersRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection ok");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


/* 
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `verifyOrder/?success=true`,
        cancel_url: `verifyOrder/?canceled=true`,
    })

    res.redirect(303, session.url);
}); */

/* const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
}; */

/* app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
}); */
