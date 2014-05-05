var express = require('express'),
    app = express();

//app.configure(function () {
        app.use(express.static(__dirname, '/'));
//        });

app.get('/customers/:id', function (req, res) {
    var customerId = parseInt(req.params.id);
    var data = {};
    for (var i = 0, len = customers.length; i < len; i++) {
        if (customers[i].id === customerId) {
            data = customers[i];
            break;
        }
    }
    res.json(data);
});

app.get('/customers', function (req, res) {
    res.json(customers);
});

app.listen(3000);

console.log('Express listening on port 3000');
    
    var customers = [
            {
                id: 1,
                name: 'John',
                city: 'London',
                orderTotal: '9.9539',
                joined: '2009-02-07',
                orders: [{
                    id: 1,
                    product: 'Shoes',
                    total: 9.9539
                }]
            },
            {
                id: 2,
                name: 'Joe',
                city: 'NYC',
                orderTotal: '3.9539',
                joined: '2009-03-01',
                orders: [{
                    id: 2,
                    product: 'Book',
                    total: 3.9539
                }]
            },
            {
                id: 3,
                name: 'Albert',
                city: 'Tokyo',
                orderTotal: '10',
                joined: '2009-04-21',
                orders: [{
                    id: 3,
                    product: 'Ring',
                    total: 6
                }, {
                    id: 4,
                    product: 'Box',
                    total: 4
                }]
            }
        ];