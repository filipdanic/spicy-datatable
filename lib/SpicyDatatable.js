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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileoverview SpicyDatatable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main entry file for `spicy-datatable` package. Renders a tabele given a tableKey, columns, and rows prop.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For complete documentation of how to use this, refer to the `README.md` or check out the examples in `App.ja`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var style = '.spicy-datatable{width:100%;overflow:scroll;padding:0;margin:0 auto;background:#fff;font-size:0.875rem;text-align:left;border-spacing:0;}.spicy-datatable > tbody > tr > td,.spicy-datatable > tfoot > tr > td,.spicy-datatable > thead > tr > th{box-sizing:border-box;height:50px;padding:0 20px;border:none;border-top:1px solid #ddd;word-break:break-all;vertical-align:middle;}.spicy-datatable > tbody > tr{transition:0.25s all;}.spicy-datatable > tbody > tr:hover{background:whitesmoke;}.spicy-datatable > thead > tr > th{border-top:0;}.spicy-datatable-counter{text-align:left;font-size:12px;padding:0 20px;}.spicy-datatable > tbody > .spicy-datatable--selected-row{background:#7a7ca0;}';


var miniCache = {};

var defaultNoEntiresLabel = 'No entries to show.';
var defaultEntryCountLabels = ['Showing', 'to', 'of', 'entries.'];

var SpicyDatatable = function (_Component) {
  _inherits(SpicyDatatable, _Component);

  function SpicyDatatable(props) {
    _classCallCheck(this, SpicyDatatable);

    var _this = _possibleConstructorReturn(this, (SpicyDatatable.__proto__ || Object.getPrototypeOf(SpicyDatatable)).call(this, props));

    var itemsPerPage = (0, _utils.getSafely)(miniCache, props.tableKey).itemsPerPage || props.config && props.config.itemsPerPageOptions ? props.config.itemsPerPageOptions[0] : 10;
    _this.state = {
      itemsPerPage: itemsPerPage,
      currentPage: (0, _utils.getSafely)(miniCache, props.tableKey).currentPage || 1,
      searchQuery: (0, _utils.getSafely)(miniCache, props.tableKey).searchQuery || ''
    };
    return _this;
  }

  _createClass(SpicyDatatable, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.tableKey !== this.props.tableKey) {
        var itemsPerPage = (0, _utils.getSafely)(miniCache, this.props.tableKey).itemsPerPage || this.props.config && this.props.config.itemsPerPageOptions ? this.props.config.itemsPerPageOptions[0] : 10;
        var currentPage = (0, _utils.getSafely)(miniCache, this.props.tableKey).currentPage || 1;
        this.setState({ currentPage: currentPage, itemsPerPage: itemsPerPage });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columns = _props.columns,
          originalRows = _props.rows,
          _props$config = _props.config,
          config = _props$config === undefined ? {} : _props$config;
      var _state = this.state,
          itemsPerPage = _state.itemsPerPage,
          currentPage = _state.currentPage,
          searchQuery = _state.searchQuery;
      var itemsPerPageOptions = config.itemsPerPageOptions,
          itemsPerPageLabel = config.itemsPerPageLabel,
          nextPageLabel = config.nextPageLabel,
          previousPageLabel = config.previousPageLabel,
          searchLabel = config.searchLabel,
          searchPlaceholder = config.searchPlaceholder,
          noEntriesLabel = config.noEntriesLabel,
          entryCountLabels = config.entryCountLabels,
          customFilter = config.customFilter;

      var isFilterActive = searchQuery.length > 0;
      var filteredRows = isFilterActive ? this.state.filteredRows : originalRows;
      var maxOnPage = currentPage * itemsPerPage;
      var rows = filteredRows.slice((currentPage - 1) * itemsPerPage, maxOnPage);
      var total = isFilterActive ? filteredRows.length : originalRows.length;
      var fromEntries = (currentPage - 1) * itemsPerPage + 1;
      var toEntries = maxOnPage > total ? total : maxOnPage;
      var entriesLabels = entryCountLabels || defaultEntryCountLabels;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DatatableOptions2.default, {
          itemsPerPage: itemsPerPage,
          itemsPerPageOptions: itemsPerPageOptions,
          itemsPerPageLabel: itemsPerPageLabel,
          onPageSizeChange: this.handlePageSizeChange.bind(this),
          onSearch: this.handleSearchQueryChange.bind(this),
          searchLabel: searchLabel,
          searchPlaceholder: searchPlaceholder
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
            entriesLabels[0],
            ' ',
            fromEntries,
            ' ',
            entriesLabels[1],
            ' ',
            toEntries,
            ' ',
            entriesLabels[2],
            ' ',
            total,
            ' ',
            entriesLabels[3]
          ) : _react2.default.createElement(
            'p',
            null,
            noEntriesLabel || defaultNoEntiresLabel
          )
        ),
        _react2.default.createElement(_Pagination2.default, {
          onPage: this.handlePagination.bind(this),
          itemsPerPage: itemsPerPage,
          total: total,
          activePage: currentPage,
          nextPageLabel: nextPageLabel,
          previousPageLabel: previousPageLabel
        })
      );
    }
  }, {
    key: 'handlePagination',
    value: function handlePagination(nextPage) {
      var tableKey = this.props.tableKey;

      this.setState({
        currentPage: nextPage
      });
      (0, _utils.setSafely)(miniCache, tableKey, 'currentPage', nextPage);
    }
  }, {
    key: 'handleSearchQueryChange',
    value: function handleSearchQueryChange(e) {
      var _this2 = this;

      var _props2 = this.props,
          columns = _props2.columns,
          rows = _props2.rows,
          _props2$config = _props2.config,
          config = _props2$config === undefined ? {} : _props2$config;
      var value = e.target.value;
      var tableKey = this.props.tableKey;
      var customFilter = config.customFilter;

      if (this.scheduleQueryChange) {
        clearTimeout(this.scheduleQueryChange);
      }
      this.scheduleQueryChange = setTimeout(function () {
        var filterContent = customFilter ? customFilter : _utils.filterRows;
        var filteredRows = (value.length === 0 ? [] : filterContent(rows, columns, value)) || []; // Avoid code from breaking if the custom filter has not been implemented correctly
        _this2.setState({ filteredRows: filteredRows, searchQuery: value, currentPage: 1 });
        (0, _utils.setSafely)(miniCache, tableKey, 'searchQuery', value);
        (0, _utils.setSafely)(miniCache, tableKey, 'currentPage', 1);
      }, 200);
    }
  }, {
    key: 'handlePageSizeChange',
    value: function handlePageSizeChange(e) {
      var value = e.target.value;
      var tableKey = this.props.tableKey;

      this.setState({ itemsPerPage: Number(value), currentPage: 1 });
      (0, _utils.setSafely)(miniCache, tableKey, 'itemsPerPage', Number(value));
      (0, _utils.setSafely)(miniCache, tableKey, 'currentPage', 1);
    }
  }]);

  return SpicyDatatable;
}(_react.Component);

SpicyDatatable.propTypes = {
  tableKey: _react.PropTypes.string.isRequired,
  columns: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    key: _react.PropTypes.string,
    label: _react.PropTypes.string
  })).isRequired,
  rows: _react.PropTypes.array.isRequired,
  config: _react.PropTypes.shape({
    itemsPerPageOptions: _react.PropTypes.arrayOf(_react.PropTypes.number),
    itemsPerPageLabel: _react.PropTypes.string,
    nextPageLabel: _react.PropTypes.string,
    previousPageLabel: _react.PropTypes.string,
    searchLabel: _react.PropTypes.string,
    searchPlaceholder: _react.PropTypes.string,
    noEntriesLabel: _react.PropTypes.string,
    entryCountLabels: _react.PropTypes.arrayOf(_react.PropTypes.string),
    customFilter: _react.PropTypes.func
  })
};
exports.default = SpicyDatatable;