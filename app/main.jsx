var React = require('react');
var ReactDOM = require("react-dom");

console.log("Hello from JSX!");

var PriceItemList = require('./components/PriceItemList.jsx');
var priceItemStore = require('./stores/PriceItemStore.jsx');
var initial = priceItemStore.getItems();

function render() {
    ReactDOM.render(<PriceItemList items={initial}/>,app)
}

priceItemStore.onChange(function(items) {
    initial = items;
    render();
})

render();