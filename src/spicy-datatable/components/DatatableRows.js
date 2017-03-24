/**
 * @fileoverview DatatableRows.js
 * Pure component that renders the rows of the table.
 */

import React, { PureComponent } from 'react';
import { DatatableRowsPropTypes } from '../PropTypes.js';

const DatatableRows = ({ columns, rows }) =>
  rows.map((r, i) =>
    <tr
      key={i}
      onClick={r.onClickHandler ? (e) => r.onClickHandler(e, r, i) : () => undefined}
      style={{ cursor: r.onClickHandler ? 'pointer' : 'default' }}
      className={r.isActive ? 'spicy-datatable--selected-row' : ''}
    >
      {columns.map((c, i) =>
        <td key={i}>
          {r[c.key]}
        </td>
      )}
    </tr>
  )

DatatableRows.propTypes = DatatableRowsPropTypes;

export default DatatableRows;
