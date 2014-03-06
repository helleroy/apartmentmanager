'use strict';

var mongoose = require('mongoose'),
    Apartment = mongoose.model('Apartment'),
    Resident = mongoose.model('Resident'),
    _ = require('lodash');

var updateResident = function (err, resident, apartment) {
    if (err) {
        console.log(err);
    } else {
        resident.apartment = apartment;
        resident.save();
    }
};

var saveApartmentToResident = function (apartment) {
    var update = function (err, resident) {
        updateResident(err, resident, apartment);
    };
    for (var i in apartment.residents) {
        Resident.load(apartment.residents[i]._id, update);
    }
};

var removeApartmentFromResident = function (apartment) {
    var update = function (err, resident) {
        updateResident(err, resident, '');
    };
    for (var i in apartment.residents) {
        Resident.load(apartment.residents[i]._id, update);
    }
};

exports.create = function (req, res) {
    var apartment = new Apartment(req.body);
    saveApartmentToResident(apartment);
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
    saveApartmentToResident(apartment);
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
            removeApartmentFromResident(apartment);
            res.jsonp(1);
        }
    });
};
