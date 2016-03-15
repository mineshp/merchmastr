var mongoose = require('mongoose');
var PriceItem = require('./models/PriceItem.js');

mongoose.connect('mongodb://localhost/sri-beauty-products', function() {
    console.log("connected.");

    mongoose.connection.db.dropDatabase();

    var items = [{
        name: "Ice Cream"
    }, {
        name: "Waffles"
    }, {
        name: "Candy",
        purchased: true
    }, {
        name: "Sharks"
    }];

    items.forEach(function(item) {
        new PriceItem(item).save();
    })
})