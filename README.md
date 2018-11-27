# latlng-distance

Calculate distance in-between given coordinates. This uses Haversine formula to perform calculations.

[![npm](https://img.shields.io/npm/v/latlng-distance.svg?style=popout)](https://www.npmjs.com/package/latlng-distance)

## Installation
Since the library is a JS-based solution, to install the latest version of latlng-distance, just hit following:

```
npm install latlng-distance
```

## Usage
```javascript
let  latlngDist  =  require('latlng-distance');

/**
 * Galle and Colombo are some cool places in Sri lanka :)
 */
let colombo = {
	lat:6.927079,
	lon:79.861244
};

let galle = {
	lat:6.053519,
	lon:80.220978
};

let  dist  =  latlngDist.distanceDiffInKm(colombo,galle);
```