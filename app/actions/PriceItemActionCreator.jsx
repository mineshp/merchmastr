var dispatcher = require('./../dispatcher.js');

module.exports = {
    add: function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"price-item:add"
        })
    },
    delete: function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"price-item:delete"
        })
    },
    buy: function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"price-item:buy"
        })
    },
    unbuy: function(item) {
        dispatcher.dispatch({
            payload:item,
            type:"price-item:unbuy"
        })
    }
}