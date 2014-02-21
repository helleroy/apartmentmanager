'use strict';

var parkingSpots = require('../controllers/parkingspots');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {

    app.get('/parkingspots', authorization.requiresLogin, parkingSpots.all);
    app.post('/parkingspots', authorization.requiresLogin, parkingSpots.create);
    app.get('/parkingspots/:parkingSpotId', authorization.requiresLogin, parkingSpots.show);
    app.put('/parkingspots/:parkingSpotId', authorization.requiresLogin, parkingSpots.update);
    app.del('/parkingspots/:parkingSpotId', authorization.requiresLogin, parkingSpots.destroy);

    app.param('parkingSpotId', parkingSpots.parkingSpot);
};