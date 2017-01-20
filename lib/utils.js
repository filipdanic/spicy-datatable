'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSafely = getSafely;
exports.setSafely = setSafely;
exports.range = range;
exports.paginationButtons = paginationButtons;
exports.filterRows = filterRows;
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
  return { searchQuery: '' };
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
 * Taken from https://github.com/chengjianhua/react-datatable
 * @param {Number} len
 * @param {Number} start
 * @returns {Array} out
 */
function range(len, start) {
  var end = 0;
  var out = [];

  if (start) {
    end = start;
    start = len;
  } else {
    start = 0;
    end = len;
  }

  for (var i = start; i < end; i++) {
    out.push(i);
  }

  return out;
}

/**
 * Taken from https://github.com/chengjianhua/react-datatable
 * @param {Number} buttons
 * @param {Number} page
 * @param {Number} pages
 * @returns {Array} numbers
 */
function paginationButtons(buttons, page, pages) {
  var numbers = [];
  var half = Math.floor(buttons / 2);

  if (pages <= buttons) {
    numbers = range(0, pages);
  } else if (page <= half) {
    numbers = range(0, buttons - 2);
    numbers.push('ellipsis');
    numbers.push(pages - 1);
  } else if (page >= pages - 1 - half) {
    numbers = range(pages - (buttons - 2), pages);
    numbers.unshift('ellipsis'); // no unshift in ie6
    numbers.unshift(0);
  } else {
    numbers = range(page - half + 2, page + half - 1);
    numbers.push('ellipsis');
    numbers.push(pages - 1);
    numbers.unshift('ellipsis');
    numbers.unshift(0);
  }
  return numbers;
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