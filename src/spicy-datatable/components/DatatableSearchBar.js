/**
 * @fileoverview DatatableSearchBar.js
 * Pure component that renders a search field for the table.
 */

import React, { PureComponent } from 'react';
import { DatatableSearchBarPropTypes } from '../PropTypes.js';

const DatatableSearchBar = ({ label, onChange, value, placeholder }) =>
  <div className="spicy-datatableoptions-search">
    <label className="spicy-datatableoptions-search--label">
      {label}
      <input
        className="spicy-datatableoptions-search--input"
        type="text"
        onChange={onChange}
        defaultValue={value}
        placeholder={placeholder}
      />
    </label>
  </div>

DatatableSearchBar.propTypes = DatatableSearchBarPropTypes;

export default DatatableSearchBar;
