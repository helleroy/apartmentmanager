'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Apartment = mongoose.model('Apartment');

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

ResidentSchema.pre('save', function (next) {
    var resident = this;
    Apartment.load(resident.apartment, function(err, apartment) {
        if (err) {
            next(err);
        } else {
            console.log('Adding resident ' + resident.name + ' to apartment ' + apartment.apartmentId);
            apartment.residents.push(resident);
            apartment.save();
            next();
        }
    });
});

ResidentSchema.pre('remove', function (next) {
    var resident = this;
    Apartment.load(resident.apartment, function(err, apartment) {
        if (err) {
            next(err);
        } else {
            for (var i in apartment.residents) {
                if (apartment.residents[i] === resident) {
                    console.log('Removing resident ' + resident.name + ' from apartment ' + apartment.apartmentId);
                    apartment.residents.splice(i, 1);
                    break;
                }
            }
            apartment.save();
            next();
        }
    });
});

mongoose.model('Resident', ResidentSchema);
