'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApartmentSchema = new Schema({
    apartmentId: {type: String, required: true},
    stairway: {type: String, required: true},
    ownershipDate: {type: Date},
    isRented: {type: Boolean},
    rentedSinceDate: {type: Date},
    residents: [{type: Schema.ObjectId, ref: 'Resident'}]
});

ApartmentSchema.statics = {
    load: function (id, cb) {
        this.findOne({_id: id}).populate('residents').exec(cb);
    },
    all: function (cb) {
        this.find().populate('residents').exec(cb);
    }
};

mongoose.model('Apartment', ApartmentSchema);