/**
 * @fileoverview DatatablePageSizePicker.js
 * Pure component that renders a select field for choosing the page size.
 */

import React, { PureComponent } from 'react';
import { DatatablePageSizePickerPropTypes } from '../PropTypes.js';

const DatatablePageSizePicker = ({ label, onChange, value, options }) =>
  <div className="spicy-datatableoptions-sizepicker">
    {label}
    <select onChange={onChange} value={value} className="spicy-datatableoptions-sizepicker--selectfield">
      {options.map((s, i) => <option key={`select-${s}-{i}`} value={s}>{s}</option>)}
    </select>
  </div>

DatatablePageSizePicker.propTypes = DatatablePageSizePickerPropTypes;

export default DatatablePageSizePicker;
