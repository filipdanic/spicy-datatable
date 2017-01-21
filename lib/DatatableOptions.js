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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview DatatableOptions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A component used to display the select field for number of rows per page as well as a search field.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Accepts two callback functions: onPageSizeChange() and onSearch().
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TODO: Split this into two components
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var style = '.spicy-datatableoptions-search{text-align:right;float:right;}.spicy-datatableoptions-sizepicker{float:left;text-align:left;cursor:pointer;}.spicy-datatableoptions-sizepicker--selectfield{margin:0 5px;}.spicy-datatableoptions-search--input{margin-left:10px;}.spicy-datatableoptions-search--input,.spicy-datatableoptions-search--label{cursor:pointer;}';


var defaultPageSizeOptions = [10, 25, 50, 100];
var defaultItemsPerPageLabel = 'Entries per page:';
var defaultSearchLabel = 'Search:';
var defaultSearchPlaceholder = 'Type to search…';

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
          itemsPerPage = _props.itemsPerPage,
          itemsPerPageLabel = _props.itemsPerPageLabel,
          itemsPerPageOptions = _props.itemsPerPageOptions,
          onSearch = _props.onSearch,
          onPageSizeChange = _props.onPageSizeChange,
          searchLabel = _props.searchLabel,
          searchPlaceholder = _props.searchPlaceholder;

      var selectOptions = itemsPerPageOptions || defaultPageSizeOptions;
      return _react2.default.createElement(
        'div',
        { className: 'spicy-datatableoptions-wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'spicy-datatableoptions-sizepicker' },
          itemsPerPageLabel || defaultItemsPerPageLabel,
          _react2.default.createElement(
            'select',
            { onChange: onPageSizeChange, value: itemsPerPage, className: 'spicy-datatableoptions-sizepicker--selectfield' },
            selectOptions.map(function (s, i) {
              return _react2.default.createElement(
                'option',
                { key: 'select-' + s + '-{i}', value: s },
                s
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'spicy-datatableoptions-search' },
          _react2.default.createElement(
            'label',
            { className: 'spicy-datatableoptions-search--label' },
            searchLabel || defaultSearchLabel,
            _react2.default.createElement('input', {
              className: 'spicy-datatableoptions-search--input',
              type: 'text',
              onChange: onSearch,
              placeholder: searchPlaceholder || defaultSearchPlaceholder
            })
          )
        )
      );
    }
  }]);

  return DatatableOptions;
}(_react.Component);

DatatableOptions.propTypes = {
  itemsPerPage: _react.PropTypes.number.isRequired,
  onSearch: _react.PropTypes.func.isRequired,
  onPageSizeChange: _react.PropTypes.func.isRequired,
  itemsPerPageOptions: _react.PropTypes.arrayOf(_react.PropTypes.number),
  itemsPerPageLabel: _react.PropTypes.string,
  searchLabel: _react.PropTypes.string,
  searchPlaceholder: _react.PropTypes.string
};
exports.default = DatatableOptions;