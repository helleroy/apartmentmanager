'use strict';

angular.module('am', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'am.system', 'am.articles', 'am.residents', 'am.apartments']);

angular.module('am.system', []);
angular.module('am.articles', []);
angular.module('am.residents', []);
angular.module('am.apartments', []);