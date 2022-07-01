"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var App = function App() {
  return /*#__PURE__*/ _react["default"].createElement(
    "div",
    {
      className: "App-container",
    },
    /*#__PURE__*/ _react["default"].createElement(
      "p",
      null,
      "Edit ",
      /*#__PURE__*/ _react["default"].createElement("code", null, "src/app.tsx"),
      " and save to reload the browser"
    )
  );
};

var _default = App;
exports["default"] = _default;
