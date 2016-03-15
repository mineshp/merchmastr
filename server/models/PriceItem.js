var mongoose = require('mongoose');

var PriceItemSchema = {
    name: String,
    purchased: Boolean,
    id: String
};

var PriceItem = mongoose.model('PriceItem', PriceItemSchema, "priceItems");

module.exports = PriceItem;