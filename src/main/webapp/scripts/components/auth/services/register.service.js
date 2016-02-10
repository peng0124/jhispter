'use strict';

angular.module('xfadminApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


