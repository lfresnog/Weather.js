"use strict";

var _request = _interopRequireDefault(require("request"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
var city = "Madrid.json?access_token=";
var token = 'pk.eyJ1IjoibGZyZXNub2ciLCJhIjoiY2sxYW8wc3o2MGczbTNpcjVoZ2sxbWRnZiJ9.Jdss3fcdT5Nypqn2KMQiFA';
var config = '&language=es';
var url = "".concat(baseURL).concat(city).concat(token).concat(config);
console.log(url); //if(!argv.index){

(0, _request["default"])({
  url: url,
  json: true
}, function (error, response) {
  console.log("\n Las ciudades con ese nombre son:");
  response.body.features.forEach(function (loc, i) {
    console.log("   ".concat(i, ": ").concat(loc.place_name));
    console.log(_chalk["default"].yellow("       x: ".concat(loc.geometry.coordinates[0], "  y: ").concat(loc.geometry.coordinates[1])));
  });
}); // }