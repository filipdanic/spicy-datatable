/**
 * @fileoverview Pagination.js
 * Component that renders all of the pagination items as a unordered list.
 * Lots of code reused from https://github.com/chengjianhua/react-datatable
 */

import React, { Component, PropTypes } from 'react';
import { getPaginationButtons } from './utilities.js';
import style from './Pagination.css';

const maxButtons = 7;
const defaultNextLabel = 'Next';
const defaultPreviousLabel = 'Back';

const navButton = (type, onClick, label) => (
  <li
    key={type}
    className={`spicy-datatable-pagination-button ${type}`}
    onClick={onClick}>
    {label}
  </li>
);

class Pagination extends Component {

  static propTypes = {
    onPage: PropTypes.func.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    activePage: PropTypes.number.isRequired,
    nextPageLabel: PropTypes.string,
    previousPageLabel: PropTypes.string,
  };

  renderPagination() {
    const { itemsPerPage, total, activePage, nextPageLabel, previousPageLabel } = this.props;
    const length = Math.ceil(total / itemsPerPage);
    const previousPage = activePage === 1 ? 1 : activePage - 1;
    const nextPage = activePage === length ? length : activePage + 1;
    let pageButtons = [
      navButton('previous', this.handlePageButtonClick.bind(this, previousPage), previousPageLabel || defaultPreviousLabel)
    ];
    const pageNumbers = getPaginationButtons(maxButtons, activePage, length).map((value, index) => {
      const classes = `spicy-datatable-pagination-button ${value + 1 === activePage ? 'active' : ''}`;
      return (
        value === 'ellipsis' ?
          <li
            key={`ellipsis${index}`}
            className="spicy-datatable-pagination-button spicy-datatable-pagination-button-elipsis">
            …
          </li> :
          <li
            key={value + 1}
            className={classes}
            onClick={this.handlePageButtonClick.bind(this, value + 1)}>
            <span>{value + 1}</span>
          </li>
      );
    });
    pageButtons = pageButtons.concat(pageNumbers);
    pageButtons.push(navButton('next', this.handlePageButtonClick.bind(this, nextPage), nextPageLabel || defaultNextLabel));
    return pageButtons;
  }

  handlePageButtonClick(nextPage) {
    const { onPage } = this.props;
    onPage && onPage(nextPage);
  }

  render() {
    const pageButtons = this.renderPagination();
    return (
      <div className="spicy-datatable-pagination-root">
        <ul className="spicy-datatable-pagination-list" style={{float: 'right'}} >
          {pageButtons}
        </ul>
      </div>
    );
  }
}

export default Pagination;
