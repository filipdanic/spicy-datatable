/**
 * @fileoverview SpicyDatatable
 * Main entry file for `spicy-datatable` package. Renders a tabele given a tableKey, columns, and rows prop.
 * For complete documentation of how to use this, refer to the `README.md` or check out the examples in `App.ja`
 */
import React, { Component, PropTypes } from 'react';
import DatatableOptions from './components/DatatableOptions.js';
import DatatableHeader from './components/DatatableHeader.js';
import DatatableRows from './components/DatatableRows.js';
import Pagination from './components/Pagination.js';
import { SpicyDatatablePropTypes } from './PropTypes.js';
import { filterRows, getSafely, setSafely } from './helpers';
import { SpicyDatatableDefaults as defaults } from './defaults.js';
import style from './table.css';

const miniCache = {};

export default class SpicyDatatable extends Component {

  static propTypes = SpicyDatatablePropTypes;

  constructor(props) {
    super(props);
    this.handlePagination = this.handlePagination.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);

    const itemsPerPage =
      getSafely(miniCache, props.tableKey).itemsPerPage ||
      props.config && props.config.itemsPerPageOptions ?
        props.config.itemsPerPageOptions[0] : 10;
    this.state = {
      itemsPerPage,
      currentPage: getSafely(miniCache, props.tableKey).currentPage || 1,
      searchQuery: getSafely(miniCache, props.tableKey).searchQuery || '',
    };
    if (this.state.searchQuery.length > 0) {
      const filterFunction = props.customFilter ? props.customFilter : filterRows;
      const filteredRows = filterFunction(props.rows, props.columns, this.state.searchQuery) || [];
      this.state.filteredRows = filteredRows;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.scheduleQueryChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tableKey !== this.props.tableKey) {
      const itemsPerPage =
        getSafely(miniCache, this.props.tableKey).itemsPerPage ||
        this.props.config && this.props.config.itemsPerPageOptions ?
          this.props.config.itemsPerPageOptions[0] : 10;
     const currentPage = getSafely(miniCache, this.props.tableKey).currentPage || 1;
      this.setState({ currentPage, itemsPerPage });
    }
  }

  render() {
    const { columns, rows: originalRows = [], config = {} } = this.props;
    const { itemsPerPage, currentPage, searchQuery = '', filteredRows: stateFilteredRows = []} = this.state || {};
    const {
      itemsPerPageOptions, itemsPerPageLabel,
      nextPageLabel, previousPageLabel,
      searchLabel, searchPlaceholder,
      noEntriesLabel, entryCountLabels,
      customFilter
    } = config;
    const isFilterActive = searchQuery.length > 0;
    const filteredRows = isFilterActive ? stateFilteredRows : originalRows;
    const maxOnPage = currentPage * itemsPerPage;
    const rows = filteredRows && filteredRows.length > 0 ? filteredRows.slice((currentPage - 1) * itemsPerPage, maxOnPage) : [];
    const total = isFilterActive ? filteredRows.length : originalRows.length;
    const fromEntries = ((currentPage - 1) * itemsPerPage) + 1;
    const toEntries = maxOnPage > total ? total : maxOnPage;
    const entriesLabels = entryCountLabels || defaults.entryCountLabels;

    return (
      <div>
        <DatatableOptions
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={itemsPerPageOptions}
          itemsPerPageLabel={itemsPerPageLabel}
          onPageSizeChange={this.handlePageSizeChange}
          onSearch={this.handleSearchQueryChange}
          searchValue={searchQuery}
          searchLabel={searchLabel}
          searchPlaceholder={searchPlaceholder}
        />
        <table className="spicy-datatable">
          {DatatableHeader({ columns })}
          <tbody>
            {DatatableRows({ columns, rows })}
          </tbody>
        </table>
        <div className="spicy-datatable-counter">
          {total > 0 ?
            <p>{entriesLabels[0]} {fromEntries} {entriesLabels[1]} {toEntries} {entriesLabels[2]} {total} {entriesLabels[3]}</p> :
            <p>{noEntriesLabel || defaults.noEntiresLabel}</p>}
        </div>
        <Pagination
          onPage={this.handlePagination}
          itemsPerPage={itemsPerPage}
          total={total}
          activePage={currentPage}
          nextPageLabel={nextPageLabel}
          previousPageLabel={previousPageLabel}
        />
      </div>
    );
  }

  handlePagination(nextPage) {
    const { tableKey } = this.props;
    this.setState({
      currentPage: nextPage,
    });
    setSafely(miniCache, tableKey, 'currentPage', nextPage);
  }

  handleSearchQueryChange(e) {
    const { columns, rows, config = {} } = this.props;
    const { value } = e.target;
    const { tableKey } = this.props;
    const { customFilter } = config
    if (this.scheduleQueryChange) {
      clearTimeout(this.scheduleQueryChange);
    }
    this.scheduleQueryChange = setTimeout(() => {
      const filterFunction = customFilter ? customFilter : filterRows;
      const filteredRows = (value.length === 0 ? [] : filterFunction(rows, columns, value)) || [];
      this.setState({ filteredRows, searchQuery: value, currentPage: 1 });
      setSafely(miniCache, tableKey, 'searchQuery', value);
      setSafely(miniCache, tableKey, 'currentPage', 1);
    }, 200);
  }

  handlePageSizeChange(e) {
    const { value } = e.target;
    const { tableKey } = this.props;
    this.setState({ itemsPerPage: Number(value), currentPage: 1 });
    setSafely(miniCache, tableKey, 'itemsPerPage', Number(value));
    setSafely(miniCache, tableKey, 'currentPage', 1);
  }
}
