let tap = require('tap');
let latlngDist = require('./');

/**
 * Galle and Colombo are cool places in Sri lanka :)
 */
let colombo = {
    lat:6.927079,
    lon:79.861244
};
let galle = {
    lat:6.053519,
    lon:80.220978
}

let expectedDist = latlngDist.distanceDiffInKm(colombo,galle);
let actualDist = 104.95;

tap.test('Distance calculation accuracy',function(t){
    t.match(expectedDist.toFixed(2),actualDist.toFixed(2),' Both distances should match.');
    t.end();
});
