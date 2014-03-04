'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResidentSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String},
    phone: {type: String},
    owner: {type: Boolean},
    apartment: {type: Schema.ObjectId, ref: 'Apartment'},
    parkingSpot: {type: Schema.ObjectId, ref: 'ParkingSpot'}
});

ResidentSchema.statics = {
    load: function(id, cb) {
        this.findOne({_id: id}).populate('apartment').populate('parkingSpot').exec(cb);
    },
    all: function(cb) {
        this.find().populate('apartment').populate('parkingSpot').exec(cb);
    }
};

mongoose.model('Resident', ResidentSchema);
