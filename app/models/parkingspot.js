'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ParkingSpotSchema = new Schema({
    parkingSpotId: {type: Number, required: true},
    occupied: {type: Boolean},
    occupiedSinceDate: {type: Date}
});

ParkingSpotSchema.statics = {
    load: function (id, cb) {
        this.findOne({_id: id}).populate('owner').exec(cb);
    },
    all: function (cb) {
        this.find().populate('owner').exec(cb);
    }
};

mongoose.model('ParkingSpot', ParkingSpotSchema);