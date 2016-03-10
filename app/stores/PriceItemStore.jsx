var dispatcher = require('./../dispatcher.js');

function PriceItemStore() {
    //var items = [];

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

    var listeners = [];

    function getItems() {
        return items;
    }

    function addPriceItem(item) {
        items.push(item);
        triggerListeners();

        //helper.post("api/items", item);
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
                // case "delete":
                //     deleteGroceryItem(event.payload);
                //     break;
                // case "buy":
                //     setGroceryItemBought(event.payload, true);
                //     break;
                // case "unbuy":
                //     setGroceryItemBought(event.payload, false);
                //     break;
            }
        }
    });

    return {
        getItems: getItems,
        onChange: onChange
    }

}

module.exports = new PriceItemStore();