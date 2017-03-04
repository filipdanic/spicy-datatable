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

const defaultPageSizeOptions = [10, 25, 50, 100];
const defaultItemsPerPageLabel = 'Entries per page:';
const defaultSearchLabel = 'Search:';
const defaultSearchPlaceholder = 'Type to search…';

class DatatableOptions extends Component {

  static propTypes = DatatableOptionsPropTypes;

  render() {
    const { itemsPerPage, itemsPerPageLabel, itemsPerPageOptions, onSearch, searchValue, onPageSizeChange, searchLabel, searchPlaceholder} = this.props;
    const selectOptions = itemsPerPageOptions || defaultPageSizeOptions;
    return (
      <div className="spicy-datatableoptions-wrapper">
        {DatatablePageSizePicker({
          label: itemsPerPageLabel || defaultItemsPerPageLabel,
          onChange: onPageSizeChange,
          value: itemsPerPage,
          options: selectOptions,
        })}
        {DatatableSearchBar({
          label: searchLabel || defaultSearchLabel,
          value: searchValue,
          onChange: onSearch,
          placeholder: searchPlaceholder || defaultSearchPlaceholder,
        })}
      </div>
    );
  }
}

export default DatatableOptions;
