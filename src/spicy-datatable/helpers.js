export const defaultCache = { searchQuery: '' };

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
export function setSafely(miniCache, tableKey, prop, val) {
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
export function range(len, start) {
  let endPos = 0;
  let startPos = 0;
  const out = [];

  if (start) {
    endPos = start;
    startPos = len;
  } else {
    startPos = 0;
    endPos = len;
  }

  for (let i = startPos; i < endPos; i++) {
    out.push(i);
  }

  return out;
}

/**
 * Searches the rows for the searchQuery.
 * @param {Array} rows
 * @param {Array} columns
 * @param {String} searchQuery
 * @returns {Array} filteredRows
 */
export function filterRows(rows, columns, searchQuery = '') {
  const filteredRows = [];
  if (searchQuery === null || searchQuery === '') {
    return rows;
  }
  rows.forEach(row => {
    columns.some(column => {
      if (row[column.key] !== undefined && row[column.key] !== null) {
        const rowValue = String(row[column.key]).toLowerCase();
        if (rowValue.length >= searchQuery.length && rowValue.indexOf(searchQuery.toLowerCase()) >= 0) {
          filteredRows.push(row);
          return true;
        }
      }
      return false;
    });
  });
  return filteredRows;
}


/**
 * Sort the rows of the column based on alphabets and integer.
 * @param {String} column
 * @param {Boolean} sortOrder
 */
 
export function sortBy(sortColumn, sortOrder) {
	const lowerCase = (value) => typeof value === "string" ? value.toLowerCase() : value;
	const key = (row) => lowerCase ? isNaN(Date.parse(lowerCase(row[sortColumn]))) ?  lowerCase(row[sortColumn]) : new Date(lowerCase(row[sortColumn])) : row[sortColumn];  
	const result = (row1,row2) => ( (row1 < row2) ? -1 : ((row1 > row2) ? 1 : 0) ) * [-1,1][Number(Boolean(sortOrder))];
	
   return function (a,b) {
	  return result(key(a), key(b));                  
   }
}
