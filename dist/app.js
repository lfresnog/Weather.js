"use strict";

var _yargs = _interopRequireDefault(require("yargs"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_yargs["default"].command({
  command: 'localization',
  describe: 'Indicate the weather in a zone',
  builder: {
    name: {
      describe: 'Name of the localization',
      demandOption: true,
      type: 'string'
    },
    index: {
      describe: 'Posible places in that place',
      demandOption: false,
      type: 'number'
    }
  },
  handler: _utils.localization
});

_yargs["default"].parse();