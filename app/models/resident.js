'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResidentSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String},
    phone: {type: String},
    owner: {type: Boolean},
    apartment: {type: Schema.ObjectId, ref: 'Apartment'},
    parking: {type: Schema.ObjectId, ref: 'Parking'}
});

ResidentSchema.statics = {
    load: function(id, cb) {
        this.findOne({_id: id}).populate('apartment').populate('parking').exec(cb);
    },
    all: function(cb) {
        this.find().populate('apartment').populate('parking').exec(cb);
    }
};

mongoose.model('Resident', ResidentSchema);
