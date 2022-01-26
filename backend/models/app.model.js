/* module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean,
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
}; */

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const order = new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    Id: { type: Number, required: true },
    published: { type: Boolean, required: true }
},
    { timestamps: true }
);

const Order = mongoose.model('Order', order);

module.exports = Order;