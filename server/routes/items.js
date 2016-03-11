module.exports = function(app) {
    var items = [{
    name: "Ice Cream"
    },
    {
        name: "Waffle"
    },{
        name: "Candy",
        purchased: true
    }, {
        name: "Sharks"
    }];

    app.route('/api/items')
    .get(function(req, res) {
        res.send(items);
    })
    .post(function(req,res) {
        var item = req.body;
        console.log("Adding item...",item);
        items.push(item);
    });
}

