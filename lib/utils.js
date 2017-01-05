'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.paginationButtons = paginationButtons;
exports.filterRows = filterRows;
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

function filterRows(rows, columns, searchQuery) {
  var filteredRows = [];
  rows.map(function (row) {
    columns.map(function (column) {
      try {
        var reg = new RegExp(searchQuery.split('').join('.*?'), ['g']);
        if (reg.exec(String(row[column.key]).toLocaleLowerCase())) {
          filteredRows.push(row);
        }
      } catch (e) {}
    });
  });
  return filteredRows;
}