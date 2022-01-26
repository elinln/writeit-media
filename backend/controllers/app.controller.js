const db = require("../models/");
const Order = db.app;

// Create and save order
exports.create = (req, res) => {
    // Validate request 
    if (!req.body.title) {
        res.status(400).send({ message: "Content can't be empty." });
        return;
    }

    // Create a order
    const order = new Order({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        Id: req.body.id,
        published: req.body.published ? req.body.published : false
    });

    // Save order in DB
    order
        .save(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while creating order." });
        });
};


// Retrieve all orders from database
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Order.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving orders."
            })
        })
}

// Find a single order with id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Order.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Did not find order with id: " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error occurred when retrieving order with id: " + id })
        });
};

// Update a order by id in request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can't be empty." })
    }
    const id = req.params.id;

    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: "Can't update order with that id. Order might not be found."
                });
            } else res.send({ message: "Order updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error occurred while updating order with id: " + id
            })
        })
}

// Delete order with specific id in request
exports.delete = (req, res) => {
    const id = req.params.id;

    Order.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: "Can't delete order with that id. It might not be found."
                })
            } else {
                res.send({
                    message: "Order deleted successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete order with id: " + id
            });
        });
};

// Deletes all
exports.deleteAll = (req, res) => {
    Order.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} orders were deleted successfully.`
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all orders."
            });
        });
};


// Find all published orders
exports.findAllPublished = (req, res) => {
    Order.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while retrieving the orders."
            });
        });
};