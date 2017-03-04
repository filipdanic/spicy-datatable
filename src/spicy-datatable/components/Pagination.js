/**
 * @fileoverview Pagination.js
 * Component that renders all of the pagination items as a unordered list.
 * Lots of code reused from https://github.com/chengjianhua/react-datatable
 */

import React, { Component, PropTypes } from 'react';
import PaginationNavButton from './PaginationNavButton.js';
import { getPaginationButtons } from './utilities.js';
import style from './Pagination.css';
import { PaginationPropTypes } from '../PropTypes.js';
import { PaginationDefaults as defaults } from '../defaults.js';

class Pagination extends Component {

  static propTypes = PaginationPropTypes;

  renderPagination() {
    const { itemsPerPage, total, activePage, nextPageLabel, previousPageLabel } = this.props;
    const length = Math.ceil(total / itemsPerPage);
    const previousPage = activePage === 1 ? 1 : activePage - 1;
    const nextPage = activePage === length ? length : activePage + 1;
    let pageButtons = [
      PaginationNavButton('previous', this.handlePageButtonClick.bind(this, previousPage), previousPageLabel || defaults.previousLabel)
    ];
    const pageNumbers = getPaginationButtons(defaults.maxButtons, activePage, length).map((value, index) => {
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
    pageButtons.push(PaginationNavButton('next', this.handlePageButtonClick.bind(this, nextPage), nextPageLabel || defaults.nextLabel));
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
