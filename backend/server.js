const express = require("express")
const app = express()
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const secretKey = process.env.STRIPE_SECRET_KEY;
const bodyParser = require("body-parser")
const port = process.env.PORT || 3000
const cors = require("cors")
app.use(cors());

/*app.use(express.static("public")); */


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());

/*const PORT = process.env.PORT || 3000;*/


const orderRouter = require('./routes/app.routes')

/*var corsOptions = {
    origin: "http://local",
};*/

/*app.use(cors(corsOptions)); */

const workoutRouter = require('./routes/app.routes')
const usersRouter = require('./routes/users.routes')
const checkoutRouter = require('./routes/checkout.routes')
app.use('/orders', orderRouter);
app.use('/users', usersRouter);
app.use('/checkout', checkoutRouter);


const mongoose = require('mongoose')
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection ok");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});


const priceDB = { '1': 1000, '2': 3000, '3': 5000, '4': 599 }

app.post('/create-checkout-session', async (req, res) => {
    const cartItems = JSON.parse(req.body.cartItems);
    const session = stripe.checkout.sessions.create({
        line_items: cartItems.map(item => {
            const li = {
                price_data: {
                    currency: 'sek',
                    product_data: {
                        name: item.title,
                        description: item.description,

                    },
                    unit_amount: priceDB[item.id] * 100
                },
                quantity: item.qty,
            }
            console.log('Item:', li)
            return li
        }),
        mode: 'payment',
        success_url: 'http://localhost:3001/successfullOrder',
        cancel_url: 'http://localhost:3001/cancelledOrder',
    }).then(session => {
        res.redirect(303, session.url);
    })
        .catch(error => {
            console.error("wrooooonggg:", error)
        })
})


