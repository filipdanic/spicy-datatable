import React, { Component, PropTypes } from 'react';
import style from './datatableoptions.css';

class DatatableOptions extends Component {

  static propTypes = {
    onSearch: PropTypes.func,
    onPageSizeChange: PropTypes.func,
  };

  render() {
    const { onSearch, onPageSizeChange } = this.props;
    return (
      <div className="spicy-datatableoptions-wrapper">
        <div className="spicy-datatableoptions-sizepicker">
          Show
          <select onChange={onPageSizeChange} className="spicy-datatableoptions-sizepicker--selectfield">
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries.
        </div>
        <div className="spicy-datatableoptions-search">
          <label className="spicy-datatableoptions-search--label">
            Search:
            <input className="spicy-datatableoptions-search--input" type="text" onChange={onSearch} placeholder="Type to search…" />
          </label>
        </div>
      </div>
    );
  }
}

export default DatatableOptions;
