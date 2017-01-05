import React, { Component, PropTypes } from 'react';
import { paginationButtons } from './utils.js';
import style from './pagination.css';

class Pagination extends Component {

  static propTypes = {
    onPage: PropTypes.func,
    itemsPerPage: PropTypes.number,
    total: PropTypes.number,
    activePage: PropTypes.number,
  };

  renderPagination() {
    const { itemsPerPage, total, activePage } = this.props;
    const length = Math.ceil(total / itemsPerPage);
    const previousPage = activePage === 1 ? 1 : activePage - 1;
    const nextPage = activePage === length ? length : activePage + 1;
    let pageButtons = [];

    pageButtons.push(
      <li key="previous" className="spicy-datatable-pagination-button previous" onClick={this.handlePageButtonClick.bind(this, previousPage)}>
        Back
      </li>
    );

    const pageNumbers = paginationButtons(7, activePage, length).map((value, index) => {
      const classes = `spicy-datatable-pagination-button ${value + 1 === activePage ? 'active' : ''}`;
      return (
        value === 'ellipsis' ?
          <li key={`ellipsis${index}`} className="spicy-datatable-pagination-button spicy-datatable-pagination-button-elipsis">...</li> :
          <li key={value + 1} className={classes} onClick={this.handlePageButtonClick.bind(this, value + 1)}><span>{value + 1}</span></li>
      );
    });

    pageButtons = pageButtons.concat(pageNumbers);

    pageButtons.push(
      <li key="next" className="spicy-datatable-pagination-button next" onClick={this.handlePageButtonClick.bind(this, nextPage)}>
        Next
      </li>
    );

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
