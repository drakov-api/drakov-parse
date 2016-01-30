var drakovParser = require('../index.js');

var options = {
    sourceFiles: '../test/examples/*.md',
    autoOptions: false
};

function done(err, routeMap) {
    if (err) {
        throw err;
    } else {
        console.log(routeMap);
    }
}

drakovParser(options, done);
