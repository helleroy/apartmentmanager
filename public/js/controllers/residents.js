'use strict';

angular.module('am.residents').controller('ResidentsController', ['$scope', '$stateParams', '$location', 'Global', 'Residents',
    function ($scope, $stateParams, $location, Global, Residents) {
        $scope.global = Global;

        $scope.create = function () {
            var resident = new Residents({
                name: this.resident.name,
                email: this.resident.email,
                phone: this.resident.phone,
                owner: this.resident.owner,
                apartment: this.resident.apartment,
                parkingSpot: this.resident.parkingSpot
            });

            resident.$save(function (response) {
                $location.path('residents/' + response._id);
            });

            this.resident.name = '';
            this.resident.email = '';
            this.resident.phone = '';
            this.resident.owner = false;
            this.resident.apartment = {};
            this.resident.parkingSpot = {};
        };

        $scope.update = function () {
            var resident = $scope.resident;

            resident.$update(function () {
                $location.path('residents/' + resident._id);
            });
        };

        $scope.find = function (query) {
            Residents.query(query, function (residents) {
                $scope.residents = residents;
            });
        };

        $scope.findOne = function () {
            Residents.get({residentId: $stateParams.residentId}, function (resident) {
                $scope.resident = resident;
            });
        };

        $scope.remove = function (resident) {
            resident.$remove();
            for (var i in $scope.residents) {
                if ($scope.residents[i] === resident) {
                    $scope.residents.splice(i, 1);
                }
            }
        };
    }]);