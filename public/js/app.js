'use strict';

angular.module('am',
    [
        'ngCookies',
        'ngResource',
        'ui.bootstrap',
        'ui.router',
        'am.system',
        'am.residents',
        'am.apartments',
        'am.parkingSpots'
    ]);

angular.module('am.system', []);
angular.module('am.residents', []);
angular.module('am.apartments', []);
angular.module('am.parkingSpots', []);
