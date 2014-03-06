'use strict';

var mongoose = require('mongoose'),
    Apartment = mongoose.model('Apartment'),
    _ = require('lodash');

exports.create = function (req, res) {
    var apartment = new Apartment(req.body);
    apartment.save();
    res.jsonp(apartment);
};

exports.show = function (req, res) {
    res.jsonp(req.apartment);
};

exports.apartment = function (req, res, next, id) {
    Apartment.load(id, function (err, apartment) {
        if(err) return next(err);
        if(!apartment) return next(new Error('Failed to load apartment ' + id));
        req.apartment = apartment;
        next();
    });
};

exports.all = function (req, res) {
    Apartment.all(function (err, apartment) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(apartment);
        }
    });
};

exports.update = function (req, res) {
    var apartment = req.apartment;
    apartment = _.extend(apartment, req.body);
    apartment.save(function () {
        res.jsonp(apartment);
    });
};

exports.destroy = function (req, res) {
    var apartment = req.apartment;
    apartment.remove(function (err) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(1);
        }
    });
};
