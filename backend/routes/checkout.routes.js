const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// TODO: Should be fetched from db/data.js
const priceDB = { '1': 1000, '2': 3000, '3': 5000, '4': 599 }
let Orders = require('../models/app.model');
let User = require('../models/user.model');


router.route('/create').post((req, res) => {
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
        cartItems.map(item => {
            const newOrder = new Orders({
                Id: parseInt(item.id),
                username: User.username,
                email: User.email,
                description: item.description,
                title: item.title,
                price: item.price, // DB
                published: true,
            })
            newOrder.save();
        });
        res.redirect(303, session.url);
    }).catch(error => {
        console.error("wrooooonggg:", error)
    })
})

module.exports = router;


/* const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// TODO: Should be fetched from db/data.js
const priceDB = { '1': 1000, '2': 3000, '3': 5000, '4': 599 }
let Orders = require('../models/app.model');


app.post('/create-checkout-session'), async (req, res) => {
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

router.route('/create-checkout-session').post((req, res) => {
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
        cartItems.map(item => {
            const newOrder = new Orders({
                Id: parseInt(item.id),
                username: 'username',
                email: 'email',
                description: item.description,
                title: item.title,
                price: item.price, // DB
                published: true,
            })
            newOrder.save();
        });
        res.redirect(303, session.url);
    }).catch(error => {
        console.error("wrooooonggg:", error)
    })
})

module.exports = router; */
