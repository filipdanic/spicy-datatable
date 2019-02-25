/**
 * @fileoverview DatatableOptions.js
 * A component used to display the select field for number of rows per page as well as a search field.
 * Accepts two callback functions: onPageSizeChange() and onSearch().
 */
import React, { Component } from 'react';
import DatatablePageSizePicker from './DatatablePageSizePicker.js';
import DatatableSearchBar from './DatatableSearchBar.js';
import { DatatableOptionsPropTypes } from '../PropTypes.js';
import { DatatableOptionsDefaults as defaults } from '../defaults.js';
// eslint-disable-next-line
import style from './DatatableOptions.css';

class DatatableOptions extends Component {
  static propTypes = DatatableOptionsPropTypes;

  render() {
    const {
      itemsPerPage, itemsPerPageLabel, itemsPerPageOptions, onPageSizeChange,
      onSearch, searchValue, searchLabel, searchPlaceholder,
      onDownloadCSV, showDownloadCSVButton, downloadCSVButtonLabel,
    } = this.props;
    const selectOptions = itemsPerPageOptions || defaults.pageSizeOptions;
    return (
      <div className="spicy-datatableoptions-wrapper">
        <div>
          {DatatablePageSizePicker({
            label: itemsPerPageLabel || defaults.itemsPerPageLabel,
            onChange: onPageSizeChange,
            value: itemsPerPage,
            options: selectOptions,
          })}
          {DatatableSearchBar({
            label: searchLabel || defaults.searchLabel,
            value: searchValue,
            onChange: onSearch,
            placeholder: searchPlaceholder || defaults.searchPlaceholder,
          })}
        </div>
        {showDownloadCSVButton ?
          <div className="spicy-datatableoptions-export--button-wrapper">
            <button className="spicy-datatableoptions-export--button" onClick={onDownloadCSV}>
              {downloadCSVButtonLabel || defaults.downloadCSVButtonLabel}
            </button>
          </div> : null}
      </div>
    );
  }
}

export default DatatableOptions;
