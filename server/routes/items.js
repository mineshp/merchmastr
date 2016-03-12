module.exports = function(app) {
    var PriceItem = require('./../models/PriceItem.js');

    app.route('/api/items')
    .get(function(req, res) {
        PriceItem.find(function(error, doc) {
            res.send(doc);
        })
    })
    .post(function(req,res) {
        var item = req.body;
        if (item) {
            console.log("Adding item...",item);
            var priceItem = new PriceItem(item);
            priceItem.save(function(err,data) {
                res.status(300).send();
            })
        }
    });

    app.route('/api/items/:id')
    .delete(function(req,res) {
        console.log("removing...",req.params.id);
        {Price}Item.findOne({
            _id: req.params.id
        }).remove(function(x) {
            console.log("removed.",x);
        });
    })
    .patch(function(req,res) {
        PriceItem.findOne({
            _id: req.body._id
        },function(error, doc) {
            for (var key in req.body) {
                doc[key] = req.body[key];
            }
            doc.save();
            res.status(200).send();
        })
    })
}

