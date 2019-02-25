import { range } from '../helpers.js';
/**
 * Taken from https://github.com/chengjianhua/react-datatable
 * @param {Number} buttonsNum, total/max buttons to display
 * @param {Number} currentPage
 * @param {Number} totalPages
 * @returns {Array} pagination
 */
export function getPaginationButtons(buttonsNum, currentPage, totalPages) {
  let pagination = [];
  const half = Math.floor(buttonsNum / 2);

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