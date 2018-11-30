/**
 * @fileoverview DatatableHeader.js
 * Pure component that renders the header of the table.
 */

import React from 'react';
import { DatatableHeaderPropTypes } from '../PropTypes.js';

const DatatableHeader = ({ columns, onSort }) =>
  <thead>
    <tr>
      {columns.map(c =>
        <th 
			key={c.key}
			onClick={c.sort ? (e) => onSort(e, c) : () => undefined}
			style={{ cursor: c.sort ? 'pointer' : 'default' }}
		>
          {c.label}
        </th>
      )}
    </tr>
  </thead>

DatatableHeader.propTypes = DatatableHeaderPropTypes;

export default DatatableHeader;
