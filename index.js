var routeMap = require('./lib/middleware/route-map');

module.exports = function(options, cb) {
    routeMap(options, function(err, routeMap) {
        cb(err, routeMap);
    });
};
