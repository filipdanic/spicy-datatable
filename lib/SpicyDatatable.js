'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Pagination = require('./Pagination.js');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _DatatableOptions = require('./DatatableOptions.js');

var _DatatableOptions2 = _interopRequireDefault(_DatatableOptions);

var _utils = require('./utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = '.spicy-datatable{width:100%;overflow:scroll;padding:0;margin:0 auto;background:#fff;font-size:0.875rem;text-align:left;border-spacing:0;}.spicy-datatable > tbody > tr > td,.spicy-datatable > tfoot > tr > td,.spicy-datatable > thead > tr > th{box-sizing:border-box;height:50px;padding:0 20px;border:none;border-top:1px solid #ddd;word-break:break-all;vertical-align:middle;}.spicy-datatable > tbody > tr:hover{background:whitesmoke;}.spicy-datatable > thead > tr > th{border-top:0;}.spicy-datatable-counter{text-align:left;font-size:12px;padding:0 20px;}.spicy-datatable > tbody > .spicy-datatable--selected-row{background:#7a7ca0;}';

var SpicyDatatable = function (_Component) {
  _inherits(SpicyDatatable, _Component);

  function SpicyDatatable(props) {
    _classCallCheck(this, SpicyDatatable);

    var _this = _possibleConstructorReturn(this, (SpicyDatatable.__proto__ || Object.getPrototypeOf(SpicyDatatable)).call(this, props));

    _this.state = {
      itemsPerPage: 10,
      currentPage: 1,
      searchQuery: ''
    };
    return _this;
  }

  _createClass(SpicyDatatable, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          itemsPerPage = _state.itemsPerPage,
          currentPage = _state.currentPage,
          searchQuery = _state.searchQuery;
      var _props = this.props,
          columns = _props.columns,
          originalRows = _props.rows;

      var isFilterActive = searchQuery.length > 0;
      var filteredRows = isFilterActive ? (0, _utils.filterRows)(originalRows, columns, searchQuery.toLocaleLowerCase()) : originalRows;
      var maxOnPage = currentPage * itemsPerPage;
      var rows = filteredRows.slice((currentPage - 1) * itemsPerPage, maxOnPage);
      var total = isFilterActive ? filteredRows.length : originalRows.length;
      var fromEntries = (currentPage - 1) * itemsPerPage + 1;
      var toEntries = maxOnPage > total ? total : maxOnPage;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DatatableOptions2.default, {
          onPageSizeChange: this.handlePageSizeChange.bind(this),
          onSearch: this.handleSearchQueryChange.bind(this)
        }),
        _react2.default.createElement(
          'table',
          { className: 'spicy-datatable' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              columns.map(function (c) {
                return _react2.default.createElement(
                  'th',
                  { key: c.key },
                  c.label
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            rows.map(function (r, i) {
              return _react2.default.createElement(
                'tr',
                {
                  key: i,
                  onClick: r.onClickHandler ? r.onClickHandler : function () {
                    return undefined;
                  },
                  style: { cursor: r.onClickHandler ? 'pointer' : 'default' },
                  className: r.isActive ? 'spicy-datatable--selected-row' : ''
                },
                columns.map(function (c, i) {
                  return _react2.default.createElement(
                    'td',
                    { key: i },
                    r[c.key]
                  );
                })
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'spicy-datatable-counter' },
          total > 0 ? _react2.default.createElement(
            'p',
            null,
            'Showing ',
            fromEntries,
            ' to ',
            toEntries,
            ' of ',
            total,
            ' entries.'
          ) : _react2.default.createElement(
            'p',
            null,
            'No entries to show.'
          )
        ),
        _react2.default.createElement(_Pagination2.default, {
          onPage: this.handlePagination.bind(this),
          itemsPerPage: itemsPerPage,
          total: total,
          activePage: currentPage
        })
      );
    }
  }, {
    key: 'handlePagination',
    value: function handlePagination(nextPage) {
      this.setState({
        currentPage: nextPage
      });
    }
  }, {
    key: 'handleSearchQueryChange',
    value: function handleSearchQueryChange(e) {
      var value = e.target.value;

      this.setState({ searchQuery: value, currentPage: 1 });
    }
  }, {
    key: 'handlePageSizeChange',
    value: function handlePageSizeChange(e) {
      var value = e.target.value;

      this.setState({ itemsPerPage: Number(value), currentPage: 1 });
    }
  }]);

  return SpicyDatatable;
}(_react.Component);

SpicyDatatable.propTypes = {
  columns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    key: _react.PropTypes.string,
    label: _react.PropTypes.string
  })).isRequired,
  rows: _react.PropTypes.array
};
exports.default = SpicyDatatable;