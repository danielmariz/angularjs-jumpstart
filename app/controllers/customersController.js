//Option 1

app.controller('CustomersController', function ($scope) {

    $scope.sortBy = 'name';
    $scope.reverse = false;

    $scope.customers = [
                {name: 'John',city:'London', orderTotal:'9.9539', joined: '2009-03-01'},
                {name: 'Joe',city:'NYC', orderTotal:'3.9539',joined: '2009-03-01'},
                {name: 'Albert',city:'Tokyo', orderTotal:'5.9539',joined: '2009-03-01'}
    ];

    $scope.doSort = function(propName){
        $scope.sortBy=propName;
        $scope.reverse=!$scope.reverse;
    };
});