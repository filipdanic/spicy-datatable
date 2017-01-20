'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSafely = getSafely;
exports.setSafely = setSafely;
exports.range = range;
exports.getPaginationButtons = getPaginationButtons;
exports.filterRows = filterRows;
var defaultCache = exports.defaultCache = { searchQuery: '' };

/**
 * Safely get the miniCache object for a tableKey prop.
 * @param {Object} miniCache
 * @param {String} tableKey
 * @returns {Object} miniCache
 */
function getSafely(miniCache, tableKey) {
  if (miniCache[tableKey]) {
    return miniCache[tableKey];
  }
  return defaultCache;
}

/**
 * Safely cache a prop in the miniCache object for a tableKey prop.
 * @param {Object} miniCache
 * @param {String} tableKey
 * @param {String} prop
 * @param {Any} val
 * @returns {Object} miniCache
 */
function setSafely(miniCache, tableKey, prop, val) {
  if (miniCache[tableKey] === undefined) {
    miniCache[tableKey] = {};
  }
  miniCache[tableKey][prop] = val;
}

/**
 * Modified from https://github.com/chengjianhua/react-datatable
 * @param {Number} len
 * @param {Number} start
 * @returns {Array} out
 */
function range(len, start) {
  var endPos = 0;
  var startPos = 0;
  var out = [];

  if (start) {
    endPos = start;
    startPos = len;
  } else {
    startPos = 0;
    endPos = len;
  }

  for (var i = startPos; i < endPos; i++) {
    out.push(i);
  }

  return out;
}

/**
 * Taken from https://github.com/chengjianhua/react-datatable
 * @param {Number} buttonsNum, total/max buttons to display
 * @param {Number} currentPage
 * @param {Number} totalPages
 * @returns {Array} pagination
 */
function getPaginationButtons(buttonsNum, currentPage, totalPages) {
  var pagination = [];
  var half = Math.floor(buttonsNum / 2);

  if (totalPages <= buttonsNum) {
    pagination = range(0, totalPages);
  } else if (currentPage <= half) {
    pagination = range(0, buttonsNum - 2);
    pagination.push('ellipsis');
    pagination.push(totalPages - 1);
  } else if (currentPage >= totalPages - 1 - half) {
    pagination = range(totalPages - (buttonsNum - 2), totalPages);
    pagination.unshift('ellipsis'); // no unshift in ie6
    pagination.unshift(0);
  } else {
    pagination = range(currentPage - half + 2, currentPage + half - 1);
    pagination.push('ellipsis');
    pagination.push(totalPages - 1);
    pagination.unshift('ellipsis');
    pagination.unshift(0);
  }
  return pagination;
}

/**
 * Searches the rows for the searchQuery.
 * @param {Array} rows
 * @param {Array} columns
 * @param {String} searchQuery
 * @returns {Array} filteredRows
 */
function filterRows(rows, columns) {
  var searchQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var filteredRows = [];
  if (searchQuery === null || searchQuery === '') {
    return rows;
  }
  rows.map(function (row) {
    columns.map(function (column) {
      if (row[column.key] !== undefined && row[column.key] !== null) {
        var rowValue = String(row[column.key]).toLowerCase();
        if (rowValue.length >= searchQuery.length && rowValue.indexOf(searchQuery.toLowerCase()) >= 0) {
          filteredRows.push(row);
        }
      }
    });
  });
  return filteredRows;
}