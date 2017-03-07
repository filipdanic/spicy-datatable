/**
 * @fileoverview DatatableHeader.js
 * Pure component that renders the header of the table.
 */

import React, { PureComponent } from 'react';
import { DatatableHeaderPropTypes } from '../PropTypes.js';

const DatatableHeader = ({ columns }) =>
  <thead>
    <tr>
      {columns.map(c =>
        <th key={c.key}>
          {c.label}
        </th>
      )}
    </tr>
  </thead>

DatatableHeader.propTypes = DatatableHeaderPropTypes;

export default DatatableHeader;
