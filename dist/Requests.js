"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var axios = require('axios');

var default_url = 'https://new.scoresaber.com';

var Requests = /*#__PURE__*/function () {
  /**
   * Empty constructor because we don't
   * need to do anything.
   */
  function Requests() {
    (0, _classCallCheck2["default"])(this, Requests);
  }
  /**
   * Get list of top ranked requests
   */


  (0, _createClass2["default"])(Requests, [{
    key: "getTop",
    value: function () {
      var _getTop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var res, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(default_url + '/api/ranking/requests/top');

              case 2:
                res = _context.sent;
                data = res.data.requests;
                this.top = data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getTop() {
        return _getTop.apply(this, arguments);
      }

      return getTop;
    }()
    /**
     * Get list of top ranked requests
     */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var res, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get(default_url + '/api/ranking/requests/belowTop');

              case 2:
                res = _context2.sent;
                data = res.data.requests;
                this.all = data;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return Requests;
}();

module.exports = Requests;