'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    Apartment = mongoose.model('Apartment');

//Globals
var apartment;

//The Tests
describe('<Unit Test>', function() {
    describe('Model Apartment:', function() {
        beforeEach(function(done) {
            apartment = new Apartment({
                apartmentId: 'B0101',
                stairway: 'B'
            });

            done();
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return apartment.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without apartmentId', function (done) {
                apartment.apartmentId = '';

                return apartment.save(function (err) {
                    should.exist(err);
                    done();
                });
            });

            it('should be able to show an error when trying to save without stairway', function (done) {
                apartment.stairway = '';

                return apartment.save(function (err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Apartment.remove({});
            done();
        });
        after(function(done) {
            Apartment.remove().exec();
            done();
        });
    });
});
