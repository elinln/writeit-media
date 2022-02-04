const router = require('express').Router();
let Orders = require('../models/app.model');

router.route('/').get((req, res) => {
    Orders.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const description = req.body.description;
    const title = req.body.title;
    const price = req.body.price;
    const id = req.body.id;
    const published = req.body.published;

    const newOrder = new Orders({
        username,
        email,
        description,
        title,
        price,
        id,
        published,
    });

    newOrder.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    Orders.findById(req.params.id)
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Orders.findByIdAndDelete(req.params.id)
        .then(orders => res.json('Order deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Orders.findById(req.params.id)
        .then(orders => {
            orders.username = req.body.username;
            orders.email = req.body.email;
            orders.description = req.body.description;
            orders.title = req.body.title;
            orders.price = req.body.price;
            orders.published = req.body.published;

            orders.save()
                .then(() => res.json('Order updated!'))
                .catch(err => res.json('Error: something went wrong...'))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;