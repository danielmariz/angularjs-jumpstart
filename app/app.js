(function () {

    var app = angular.module('customersApp', ['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
        .when('/',
              {
                  controller: 'CustomersController',
                  templateUrl: 'app/views/Customers.html'
              })
        .when('/orders/:customerId',
              {
                  controller: 'OrdersController',
                  templateUrl: 'app/views/Orders.html'
              })
        .when('/orders',
              {
                  controller: 'AllOrdersController',
                  templateUrl: 'app/views/AllOrders.html'
              })
        .otherwise({ redirectTo: '/'});
    });

}());