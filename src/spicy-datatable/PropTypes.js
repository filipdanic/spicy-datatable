/**
 * @fileoverview PropTypes.js
 * Used to define React prototypes for every component in the library.
 * Only `SpicyDatatablePropTypes` are the props that are available in the public API
 * Rest are used internally by the library.
 */

import PropTypes from 'prop-types';

export const DatatableOptionsPropTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  itemsPerPageLabel: PropTypes.string,
  searchLabel: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  onDownloadCSV: PropTypes.func,
  showDownloadCSVButton: PropTypes.bool,
  downloadCSVButtonLabel: PropTypes.string,
};

export const DatatablePageSizePickerPropTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export const DatatableSearchBarPropTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export const Rows = PropTypes.array.isRequired;

export const Header = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const DatatableHeaderPropTypes = PropTypes.arrayOf(Header).isRequired;

export const DatatableRowsPropTypes = PropTypes.shape({
  columns: Header,
  rows: Rows,
}).isRequired;

export const SpicyDatatablePropTypes = {
  tableKey: PropTypes.string.isRequired,
  columns: DatatableHeaderPropTypes,
  rows: Rows,
  config: PropTypes.shape({
    itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    itemsPerPageLabel: PropTypes.string,
    nextPageLabel: PropTypes.string,
    previousPageLabel: PropTypes.string,
    searchLabel: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    noEntriesLabel: PropTypes.string,
    entryCountLabels: PropTypes.arrayOf(PropTypes.string),
    customFilter: PropTypes.func,
    showDownloadCSVButton: PropTypes.bool,
    downloadCSVButtonLabel: PropTypes.string,
  }),
};
