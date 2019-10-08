"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localization = void 0;

var _request = _interopRequireDefault(require("request"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localization = function localization(argv) {
  try {
    var mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    var city = "".concat(argv.name, ".json?access_token=");
    var mapBoxtoken = 'pk.eyJ1IjoibGZyZXNub2ciLCJhIjoiY2sxYW8wc3o2MGczbTNpcjVoZ2sxbWRnZiJ9.Jdss3fcdT5Nypqn2KMQiFA';
    var config = '&language=es';
    var mapBoxurl = "".concat(mapBoxURL).concat(city).concat(mapBoxtoken).concat(config);

    if (argv.index == null) {
      (0, _request["default"])({
        url: mapBoxurl,
        json: true
      }, function (error, response) {
        console.log("\n Las ciudades con ese nombre son:\n");
        response.body.features.forEach(function (loc, i) {
          console.log("   ".concat(i, ": ").concat(loc.place_name));
          console.log(_chalk["default"].yellow("       x: ".concat(loc.geometry.coordinates[0], "  y: ").concat(loc.geometry.coordinates[1])));
        });
      });
    } else {
      (0, _request["default"])({
        url: mapBoxurl,
        json: true
      }, function (error, response) {
        console.log("");
        console.log("".concat(response.body.features[argv.index].place_name));
        console.log(_chalk["default"].yellow("  x: ".concat(response.body.features[argv.index].geometry.coordinates[0], "  y: ").concat(response.body.features[argv.index].geometry.coordinates[1])));
        var cordX = response.body.features[argv.index].geometry.coordinates[0];
        var cordY = response.body.features[argv.index].geometry.coordinates[1];
        var darkSkyURl = 'https://api.darksky.net/forecast/';
        var darkSkytoken = '7e42fcf88c4ed04bbdd548e6c7469798';
        var darkSkyurl = "".concat(darkSkyURl).concat(darkSkytoken, "/").concat(cordX, ",").concat(cordY);
        (0, _request["default"])({
          url: darkSkyurl,
          json: true
        }, function (error, response) {
          console.log("La temperatura en esa ciudad es ".concat(response.body.currently.temperature));
        });
      });
    }
  } catch (error) {
    console.error(_chalk["default"].red("\n ERROR \n"));
  }
};

exports.localization = localization;