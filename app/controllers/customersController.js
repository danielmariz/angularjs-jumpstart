(function () {

    'use strict';
    var CustomersController = function ($scope) {

        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {
                name: 'John',
                city: 'London',
                orderTotal: '9.9539',
                joined: '2009-02-07'
            },
            {
                name: 'Joe',
                city: 'NYC',
                orderTotal: '3.9539',
                joined: '2009-03-01'
            },
            {
                name: 'Albert',
                city: 'Tokyo',
                orderTotal: '5.9539',
                joined: '2009-04-21'
            }
        ];

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());