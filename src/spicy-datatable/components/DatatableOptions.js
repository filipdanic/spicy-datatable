/**
 * @fileoverview DatatableOptions.js
 * A component used to display the select field for number of rows per page as well as a search field.
 * Accepts two callback functions: onPageSizeChange() and onSearch().
 * TODO: Split this into two components
 */
import React, { Component, PropTypes } from 'react';
import style from './DatatableOptions.css';

const defaultPageSizeOptions = [10, 25, 50, 100];
const defaultItemsPerPageLabel = 'Entries per page:';
const defaultSearchLabel = 'Search:';
const defaultSearchPlaceholder = 'Type to search…';

class DatatableOptions extends Component {

  static propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    searchValue: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onPageSizeChange: PropTypes.func.isRequired,
    itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    itemsPerPageLabel: PropTypes.string,
    searchLabel: PropTypes.string,
    searchPlaceholder: PropTypes.string,
  };

  render() {
    const { itemsPerPage, itemsPerPageLabel, itemsPerPageOptions, onSearch, searchValue, onPageSizeChange, searchLabel, searchPlaceholder} = this.props;
    const selectOptions = itemsPerPageOptions || defaultPageSizeOptions;
    return (
      <div className="spicy-datatableoptions-wrapper">
        <div className="spicy-datatableoptions-sizepicker">
          {itemsPerPageLabel || defaultItemsPerPageLabel}
          <select onChange={onPageSizeChange} value={itemsPerPage} className="spicy-datatableoptions-sizepicker--selectfield">
            {selectOptions.map((s, i) => <option key={`select-${s}-{i}`} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="spicy-datatableoptions-search">
          <label className="spicy-datatableoptions-search--label">
            {searchLabel || defaultSearchLabel}
            <input
              className="spicy-datatableoptions-search--input"
              type="text"
              onChange={onSearch}
              defaultValue={searchValue}
              placeholder={searchPlaceholder || defaultSearchPlaceholder}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default DatatableOptions;
