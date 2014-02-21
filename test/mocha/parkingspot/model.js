'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    ParkingSpot = mongoose.model('ParkingSpot');

//Globals
var parkingSpot;

//The Tests
describe('<Unit Test>', function() {
    describe('Model ParkingSpot:', function() {
        beforeEach(function(done) {
            parkingSpot = new ParkingSpot({
                parkingSpotId: 2,
            });

            done();
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return parkingSpot.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without parkingSpotId', function (done) {
                parkingSpot.parkingSpotId = null;

                return parkingSpot.save(function (err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            ParkingSpot.remove({});
            done();
        });
        after(function(done) {
            ParkingSpot.remove().exec();
            done();
        });
    });
});
