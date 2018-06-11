const mongoose = require('mongoose');

const shoppingItemSchema = mongoose.Schema({
    item_no: {
        type: Number,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    item_price: {
        type: Number,
        required: true
    },
	 item_quantity: {
        type: Number,
        required: true
    }

});

const Item = module.exports = mongoose.model('Item', shoppingItemSchema);