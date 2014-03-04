'use strict';

angular.module('am.apartments').controller('ApartmentsController', ['$scope', '$stateParams', '$location', 'Global', 'Apartments', 'Residents',
    function ($scope, $stateParams, $location, Global, Apartments, Residents) {
        $scope.global = Global;

        $scope.populateResidents = function (query) {
            Residents.query(query, function (residents) {
                $scope.residents = residents;
            });
        };

        $scope.toggleResident = function (id) {
            if ($scope.apartment === undefined) {
                $scope.apartment = {};
            }
            if ($scope.apartment.residents === undefined) {
                $scope.apartment.residents = [];
            }

            var push = true;
            for (var i in $scope.apartment.residents) {
                if ($scope.apartment.residents[i] === id) {
                    $scope.apartment.residents.splice(i, 1);
                    push = false;
                    break;
                }
            }

            if (push) {
                this.apartment.residents.push(id);
            }

            console.log($scope.apartment.residents);
        };

        $scope.create = function () {
            var apartment = new Apartments({
                apartmentId: this.apartment.apartmentId,
                stairway: this.apartment.stairway,
                ownershipDate: this.apartment.ownershipDate,
                isRented: this.apartment.isRented,
                rentedSinceDate: this.apartment.rentedSinceDate,
                residents: this.apartment.residents
            });

            apartment.$save(function (response) {
                $location.path('apartments/' + response._id);
            });

            this.apartment.apartmentId = '';
            this.apartment.stairway = '';
            this.apartment.ownershipDate = '';
            this.apartment.isRented = false;
            this.apartment.rentedSinceDate = '';
            this.apartment.residents = [];
        };

        $scope.update = function () {
            var apartment = $scope.apartment;

            apartment.$update(function () {
                $location.path('apartments/' + apartment._id);
            });
        };

        $scope.find = function (query) {
            Apartments.query(query, function (apartments) {
                $scope.apartments = apartments;
            });
        };

        $scope.findOne = function () {
            Apartments.get({apartmentId: $stateParams.apartmentId}, function (apartment) {
                $scope.apartment = apartment;
            });
        };

        $scope.remove = function (apartment) {
            apartment.$remove();
            for (var i in $scope.apartments) {
                if ($scope.apartments[i] === apartment) {
                    $scope.apartments.splice(i, 1);
                }
            }
        };
    }]);