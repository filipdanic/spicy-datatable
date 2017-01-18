/**
 * Safely get the miniCache object for a tableKey prop.
 * @param {Object} miniCache
 * @param {String} tableKey
 * @returns {Object} miniCache
 */
export function getSafely(miniCache, tableKey) {
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
export function setSafely(miniCache, tableKey, prop, val) {
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
export function range(len, start) {
  let end = 0;
  const out = [];

  if (start) {
    end = start;
    start = len;
  } else {
    start = 0;
    end = len;
  }

  for (let i = start; i < end; i++) {
    out.push(i);
  }

  return out;
}

/**
 * Taken from https://github.com/chengjianhua/react-datatable
 * @param {Array} buttons
 * @param {Number} page
 * @param {Array} pages
 * @returns {Array} numbers
 */
export function paginationButtons(buttons, page, pages) {
  let numbers = [];
  const half = Math.floor(buttons / 2);

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
 * Sorts the rows.
 * @param {Array} rows
 * @param {Array} columns
 * @param {String} searchQuery
 * @returns {Array} filteredRows
 */
export function filterRows(rows, columns, searchQuery) {
  const filteredRows = [];
  rows.map(row => {
    columns.map(column => {
      try {
        const reg = new RegExp(searchQuery.split('').join('.*?'), ['g']);
          if (reg.exec(String(row[column.key]).toLocaleLowerCase())) {
            filteredRows.push(row);
          }
      } catch(e) {}
    });
  });
  return filteredRows;
}
