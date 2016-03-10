var React = require('react');
var ReactDOM = require("react-dom");
var PriceItem = require('./PriceItem.jsx');
var PriceListAddItem = require('./PriceListAddItem.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Merch Mngr</h1>
                <div>
                    {
                        this.props.items.map(function(item, index) {
                            return (
                                <PriceItem item={item} key={"item"+index}/>
                            )
                        })
                    }
                </div>
                <PriceListAddItem />
            </div>
        )
    }
})

