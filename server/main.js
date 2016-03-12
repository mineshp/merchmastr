var express = require('express');
var parser = require('body-parser');

var React = require('react');
var ReactDOMServer = require('react-dom/server')
var app = new express();
var PriceItem = require('./models/PriceItem.js');

require('babel-core/register')({
    presets: ['es2015', 'react']
})
require('babel-register');

require('./database.js');

app.get('/', function(req, res){
    //res.render('../app/index.ejs', {});
    var application = React.createFactory(require('./../app/components/PriceItemList.jsx'));

    PriceItem.find(function(error, doc) {
        var generated = ReactDOMServer.renderToString(application({
            items:doc
        }));

        res.render('./../app/index.ejs', {reactOutput:generated});
    })
})
.use(express.static(__dirname + '/../.tmp'))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);