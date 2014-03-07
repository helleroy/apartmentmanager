'use strict';

angular.module('am.parkingSpots').controller('ParkingSpotsController', ['$scope', '$stateParams', '$location', 'Global', 'ParkingSpots', 'Residents',
    function ($scope, $stateParams, $location, Global, ParkingSpots, Residents) {
        $scope.global = Global;

        $scope.populateResidents = function (query) {
            Residents.query(query, function (residents) {
                $scope.residents = residents;
            });
        };

        $scope.create = function () {
            var parkingSpot = new ParkingSpots({
                parkingSpotId: this.parkingSpot.parkingSpotId,
                occupied: this.parkingSpot.occupied,
                occupiedSinceDate: this.parkingSpot.occupiedSinceDate
            });

            parkingSpot.$save(function (response) {
                $location.path('parkingspots/' + response._id);
            });

            this.parkingSpot.parkingSpotId = '';
            this.parkingSpot.occupied = false;
            this.parkingSpot.occupiedSinceDate = '';
        };

        $scope.update = function () {
            var parkingSpot = $scope.parkingSpot;

            parkingSpot.$update(function () {
                $location.path('parkingspots/' + parkingSpot._id);
            });
        };

        $scope.find = function (query) {
            ParkingSpots.query(query, function (parkingSpots) {
                $scope.parkingSpots = parkingSpots;
            });
        };

        $scope.findOne = function () {
            ParkingSpots.get({parkingSpotId: $stateParams.parkingSpotId}, function (parkingSpot) {
                $scope.parkingSpot = parkingSpot;
            });
        };

        $scope.remove = function (parkingSpot) {
            parkingSpot.$remove();
            for (var i in $scope.parkingSpots) {
                if ($scope.parkingSpots[i] === parkingSpot) {
                    $scope.parkingSpots.splice(i, 1);
                }
            }
        };

        $scope.toggleDatePicker = function($event, target) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope[target] = !$scope[target];
        };
    }]);