'use strict';

var apartments = require('../controllers/apartments');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {

    app.get('/apartments', authorization.requiresLogin, apartments.all);
    app.post('/apartments', authorization.requiresLogin, apartments.create);
    app.get('/apartments/:apartmentId', authorization.requiresLogin, apartments.show);
    app.put('/apartments/:apartmentId', authorization.requiresLogin, apartments.update);
    app.del('/apartments/:apartmentId', authorization.requiresLogin, apartments.destroy);

    app.param('apartmentId', apartments.apartment);
};