'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = '.spicy-datatableoptions-search{text-align:right;float:right;}.spicy-datatableoptions-sizepicker{float:left;text-align:left;cursor:pointer;}.spicy-datatableoptions-sizepicker--selectfield{margin:0 5px;}.spicy-datatableoptions-search--input{margin-left:10px;}.spicy-datatableoptions-search--input,.spicy-datatableoptions-search--label{cursor:pointer;}';

var DatatableOptions = function (_Component) {
  _inherits(DatatableOptions, _Component);

  function DatatableOptions() {
    _classCallCheck(this, DatatableOptions);

    return _possibleConstructorReturn(this, (DatatableOptions.__proto__ || Object.getPrototypeOf(DatatableOptions)).apply(this, arguments));
  }

  _createClass(DatatableOptions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onSearch = _props.onSearch,
          onPageSizeChange = _props.onPageSizeChange;

      return _react2.default.createElement(
        'div',
        { className: 'spicy-datatableoptions-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'spicy-datatableoptions-sizepicker' },
          'Show',
          _react2.default.createElement(
            'select',
            { onChange: onPageSizeChange, className: 'spicy-datatableoptions-sizepicker--selectfield' },
            _react2.default.createElement(
              'option',
              { value: 10 },
              '10'
            ),
            _react2.default.createElement(
              'option',
              { value: 25 },
              '25'
            ),
            _react2.default.createElement(
              'option',
              { value: 50 },
              '50'
            ),
            _react2.default.createElement(
              'option',
              { value: 100 },
              '100'
            )
          ),
          'entries.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'spicy-datatableoptions-search' },
          _react2.default.createElement(
            'label',
            { className: 'spicy-datatableoptions-search--label' },
            'Search:',
            _react2.default.createElement('input', { className: 'spicy-datatableoptions-search--input', type: 'text', onChange: onSearch, placeholder: 'Type to search\u2026' })
          )
        )
      );
    }
  }]);

  return DatatableOptions;
}(_react.Component);

DatatableOptions.propTypes = {
  onSearch: _react.PropTypes.func,
  onPageSizeChange: _react.PropTypes.func
};
exports.default = DatatableOptions;