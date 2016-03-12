var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function PriceItemStore() {
    var items = [];

    helper.get("api/items")
    .then(function(data) {
        items = data;
        triggerListeners();
    })

    var listeners = [];

    function getItems() {
        return items;
    }

    function addPriceItem(item) {

        if (item.name) {
            items.push(item);
            triggerListeners();

            helper.post("api/items", item);
        }
    }

    function deletePriceItem(item) {
        var index;
        items.filter(function(_item, _index) {
            if (_item.name == item.name ) {
                index = _index;
            }
        });

        items.splice(index,1);
        triggerListeners();

        helper.del("api/items/" + item._id);
    }

    function setPriceItemBought(item, isBought) {
        var _item = items.filter(function(a) {
            return a.name == item.name
        })[0];

        item.purchased = isBought || false;
        triggerListeners();

        helper.patch("api/items/" + item._id, item);
    }


    function onChange(listener) {
        listeners.push(listener);
    }

    function triggerListeners() {
        listeners.forEach(function(listener) {
            listener(items);
        })
    };

    dispatcher.register(function(event){
        var split = event.type.split(':');
        if (split[0] === 'price-item') {
            switch(split[1]) {
                case "add":
                    addPriceItem(event.payload);
                    break;
                case "delete":
                    deletePriceItem(event.payload);
                    break;
                case "buy":
                    setPriceItemBought(event.payload, true);
                    break;
                case "unbuy":
                    setPriceItemBought(event.payload, false);
                    break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }

}

module.exports = new PriceItemStore();