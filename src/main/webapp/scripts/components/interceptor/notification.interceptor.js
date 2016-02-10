 'use strict';

angular.module('xfadminApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-xfadminApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-xfadminApp-params')});
                }
                return response;
            }
        };
    });
