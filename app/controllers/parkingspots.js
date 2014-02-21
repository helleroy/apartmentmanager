'use strict';

var mongoose = require('mongoose'),
    ParkingSpot = mongoose.model('ParkingSpot'),
    _ = require('lodash');

exports.create = function (req, res) {
    var parkingSpot = new ParkingSpot(req.body);
    parkingSpot.save();
    res.jsonp(parkingSpot);
};

exports.show = function (req, res) {
    res.jsonp(req.parkingSpot);
};

exports.parkingSpot = function (req, res, next, id) {
    ParkingSpot.load(id, function (err, parkingSpot) {
        if(err) return next(err);
        if(!parkingSpot) return next(new Error('Failed to load parking spot ' + id));
        req.parkingSpot = parkingSpot;
        next();
    });
};

exports.all = function (req, res) {
    ParkingSpot.all(function (err, parkingSpot) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(parkingSpot);
        }
    });
};

exports.update = function (req, res) {
    var parkingSpot = req.parkingSpot;
    parkingSpot = _.extend(parkingSpot, req.body);
    parkingSpot.save(function () {
        res.jsonp(parkingSpot);
    });
};

exports.destroy = function (req, res) {
    var parkingSpot = req.parkingSpot;
    parkingSpot.remove(function (err) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(1);
        }
    });
};