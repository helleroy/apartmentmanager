'use strict';

angular.module('am').directive('residents', function () {
    return {
        restrict: 'E',
        controller: 'ResidentsController',
        templateUrl: 'views/residents/list.html',
        scope: {}
    };
});

angular.module('am').directive('apartments', function () {
    return {
        restrict: 'E',
        controller: 'ApartmentsController',
        templateUrl: 'views/apartments/list.html',
        scope: {}
    };
});

angular.module('am').directive('parkingspots', function () {
    return {
        restrict: 'E',
        controller: 'ParkingSpotsController',
        templateUrl: 'views/parkingspots/list.html',
        scope: {}
    };
});

angular.module('am').factory('editableFieldFactory', function() {
    return function (settings) {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: settings.templateUrl,
            scope: {
                value: '=' + settings.directiveName
            },
            link: function(scope) {
                scope.editorEnabled = false;
                scope.editableValue = scope.value;

                scope.enableEditor = function () {
                    scope.editorEnabled = true;
                    scope.editableValue = scope.value;
                };

                scope.disableEditor = function () {
                    scope.editorEnabled = false;
                };

                scope.done = function () {
                    scope.value = scope.editableValue;
                    scope.disableEditor();
                };
            }
        };
    };
});

angular.module('am').directive('editableText', ['editableFieldFactory', function (editableFieldFactory) {
    return editableFieldFactory({
        templateUrl: 'views/directives/editabletext.html',
        directiveName: 'editableText'
    });
}]);

angular.module('am').directive('editableCheckbox', ['editableFieldFactory', function (editableFieldFactory) {
    return editableFieldFactory({
        templateUrl: 'views/directives/editablecheckbox.html',
        directiveName: 'editableCheckbox'
    });
}]);

angular.module('am').directive('editableDate', ['editableFieldFactory', function (editableFieldFactory) {
    return editableFieldFactory({
        templateUrl: 'views/directives/editabledate.html',
        directiveName: 'editableDate'
    });
}]);

angular.module('am').directive('saveButton', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/savebutton.html',
        transclude: true,
        scope: {
            modelToWatch: '&',
            clickFunction: '&'
        },
        link: function (scope) {
            scope.showLink = false;

            scope.$watch(scope.modelToWatch, function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                scope.showLink = true;
            }, true);

            scope.hide = function () {
                scope.showLink = false;
            };
        }
    };
});

angular.module('am').directive('setFocus', function () {
    return {
        restrict: 'A',
        scope: {
            setFocus: '&'
        },
        link: function (scope, element) {
            scope.$watch(scope.setFocus, function () {
                if (scope.setFocus) {
                    element[0].focus();
                }
            });
        }
    };
});
