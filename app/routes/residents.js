'use strict';

var residents = require('../controllers/residents');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {

    app.get('/residents', authorization.requiresLogin, residents.all);
    app.post('/residents', authorization.requiresLogin, residents.create);
    app.get('/residents/:residentId', authorization.requiresLogin, residents.show);
    app.put('/residents/:residentId', authorization.requiresLogin, residents.update);
    app.del('/residents/:residentId', authorization.requiresLogin, residents.destroy);

    app.param('residentId', residents.resident);
};