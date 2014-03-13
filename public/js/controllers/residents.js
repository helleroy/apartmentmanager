'use strict';

angular.module('am.residents').controller('ResidentsController', ['$scope', '$stateParams', '$location', '$modal', 'Global', 'Residents', 'Apartments', 'ParkingSpots',
    function ($scope, $stateParams, $location, $modal, Global, Residents, Apartments, ParkingSpots) {
        $scope.global = Global;

        $scope.populateApartments = function (query) {
            Apartments.query(query, function (apartments) {
                $scope.apartments = apartments;
            });
        };

        $scope.populateParkingSpots = function (query) {
            ParkingSpots.query(query, function (parkingSpots) {
                $scope.parkingSpots = parkingSpots;
            });
        };

        $scope.openResident = function (resident) {
            $modal.open({
                templateUrl: 'views/residents/view.html',
                controller: 'ResidentsModalController',
                resolve: {
                    resident: function() {
                        return resident;
                    }
                }
            });
        };

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

angular.module('am.residents').controller('ResidentsModalController', ['$scope', '$modalInstance', 'resident',
    function ($scope, $modalInstance, resident) {
        $scope.resident = resident;
    }]);