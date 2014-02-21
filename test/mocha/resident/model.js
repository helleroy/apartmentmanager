'use strict';

var should = require('should'),
    mongoose = require('mongoose'),
    Resident = mongoose.model('Resident');

//Globals
var resident;

//The Tests
describe('<Unit Test>', function() {
    describe('Model Resident:', function() {
        beforeEach(function(done) {
            resident = new Resident({
                name: 'Ola Nordmann',
                email: 'lol@lol.com'
            });

            done();
        });

        describe('Method Save', function() {
            it('should be able to save without problems', function(done) {
                return resident.save(function(err) {
                    should.not.exist(err);
                    done();
                });
            });

            it('should be able to show an error when try to save without name', function(done) {
                resident.name = '';

                return resident.save(function(err) {
                    should.exist(err);
                    done();
                });
            });
        });

        afterEach(function(done) {
            Resident.remove({});
            done();
        });
        after(function(done) {
            Resident.remove().exec();
            done();
        });
    });
});
