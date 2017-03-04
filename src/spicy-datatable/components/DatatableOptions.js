/**
 * @fileoverview DatatableOptions.js
 * A component used to display the select field for number of rows per page as well as a search field.
 * Accepts two callback functions: onPageSizeChange() and onSearch().
 */
import React, { Component } from 'react';
import style from './DatatableOptions.css';
import DatatablePageSizePicker from './DatatablePageSizePicker.js';
import DatatableSearchBar from './DatatableSearchBar.js';
import { DatatableOptionsPropTypes } from '../PropTypes.js';
import { DatatableOptionsDefaults as defaults } from '../defaults.js';

class DatatableOptions extends Component {

  static propTypes = DatatableOptionsPropTypes;

  render() {
    const { itemsPerPage, itemsPerPageLabel, itemsPerPageOptions, onSearch, searchValue, onPageSizeChange, searchLabel, searchPlaceholder} = this.props;
    const selectOptions = itemsPerPageOptions || defaults.pageSizeOptions;
    return (
      <div className="spicy-datatableoptions-wrapper">
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
    );
  }
}

export default DatatableOptions;
