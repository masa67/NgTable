
(function () {
    'use strict';

    /*global angular */
    angular
        .module('MainCtrl', [])
        .controller('EmployeeController', function ($rootScope, $scope, Employee, ngTableParams, ngTableFactory) {
            $scope.tableParams = ngTableFactory.create(20, {lastname: 'asc'});   // count, sorting
        });
}());