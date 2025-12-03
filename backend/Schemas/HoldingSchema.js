const {Schema}= require('mongoose');
const HoldingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports= {HoldingSchema};