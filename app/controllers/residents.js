'use strict';

var mongoose = require('mongoose'),
    Resident = mongoose.model('Resident'),
    _ = require('lodash');

exports.create = function (req, res) {
    var resident = new Resident(req.body);
    resident.save();
    res.jsonp(resident);
};

exports.show = function (req, res) {
    res.jsonp(req.resident);
};

exports.resident = function (req, res, next, id) {
    Resident.load(id, function (err, resident) {
        if(err) return next(err);
        if(!resident) return next(new Error('Failed to load resident ' + id));
        req.resident = resident;
        next();
    });
};

exports.all = function (req, res) {
    Resident.all(function (err, residents) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(residents);
        }
    });
};

exports.update = function (req, res) {
    var resident = req.fantasyteam;
    resident = _.extend(resident, req.body);
    resident.save(function () {
        res.jsonp(resident);
    });
};

exports.destroy = function (req, res) {
    var resident = req.league;
    resident.remove(function (err) {
        if (err) {
            res.render('error', {status: 500});
        } else {
            res.jsonp(1);
        }
    });
};