import React, { PureComponent } from 'react';

export default (type, onClick, label) => (
  <li
    key={type}
    className={`spicy-datatable-pagination-button ${type}`}
    onClick={onClick}>
    {label}
  </li>
);
