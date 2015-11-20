
(function () {
    'use strict';

    /*global angular */
    angular
        .module('TableFactory', [])
        .factory('ngTableFactory', function(ngTableParams, Employee) {
            return {
                create: function(count, sorting) {
                    return new ngTableParams({
                        page: 1,            // initial page
                        count: count,       // count per page
                        sorting: sorting    // initial sorting
                    }, {
                        total: 0,
                        getData: function($defer, params) {
                            Employee.query({page: params.page(), size: params.count()}, function(result) {
                                $defer.resolve(result);
                            });
                        }
                    });
                }
            }
        })
        .factory('Employee', function($resource) {
            return $resource('/data', {}, {});
        });
}());
