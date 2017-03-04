/**
 * @fileoverview PropTypes.js
 * Used to define React proptypes for every component in the library.
 * Only `SpicyDatatablePropTypes` are the props that are avilable in the public API
 * Rest are used internally by the library.
 */

import { PropTypes } from 'react';

export const DatatableOptionsPropTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  itemsPerPageLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
};

export const PaginationPropTypes = {
  onPage: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  nextPageLabel: PropTypes.string,
  previousPageLabel: PropTypes.string,
};

export const SpicyDatatablePropTypes = {
  tableKey: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  rows: PropTypes.array.isRequired,
  config: PropTypes.shape({
    itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    itemsPerPageLabel: PropTypes.string,
    nextPageLabel: PropTypes.string,
    previousPageLabel: PropTypes.string,
    searchLabel: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    noEntriesLabel: PropTypes.string,
    entryCountLabels: PropTypes.arrayOf(PropTypes.string),
    customFilter: PropTypes.func
  }),
};
