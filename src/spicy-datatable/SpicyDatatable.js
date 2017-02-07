/**
 * @fileoverview SpicyDatatable
 * Main entry file for `spicy-datatable` package. Renders a tabele given a tableKey, columns, and rows prop.
 * For complete documentation of how to use this, refer to the `README.md` or check out the examples in `App.ja`
 */
import React, { Component, PropTypes } from 'react';
import Pagination from './Pagination.js';
import DatatableOptions from './DatatableOptions.js';
import { filterRows, getSafely, setSafely } from './utils.js';
import style from './table.css';

const miniCache = {};

const defaultNoEntiresLabel = 'No entries to show.';
const defaultEntryCountLabels = ['Showing', 'to', 'of', 'entries.'];

export default class SpicyDatatable extends Component {

  static propTypes = {
    tableKey: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    })).isRequired,
    rows: PropTypes.array.isRequired,
    config: PropTypes.shape({
      itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
      itemsPerPageLabel: PropTypes.string,
      nextPageLabel: PropTypes.string,
      previousPageLabel: PropTypes.string,
      searchLabel: PropTypes.string,
      searchPlaceholder: PropTypes.string,
      noEntriesLabel: PropTypes.string,
      entryCountLabels: PropTypes.arrayOf(PropTypes.string),
      customFilter: PropTypes.func
    }),
  };

  constructor(props) {
    super(props);
    const itemsPerPage =
      getSafely(miniCache, props.tableKey).itemsPerPage ||
      props.config && props.config.itemsPerPageOptions ?
        props.config.itemsPerPageOptions[0] : 10;
    this.state = {
      itemsPerPage,
      currentPage: getSafely(miniCache, props.tableKey).currentPage || 1,
      searchQuery: getSafely(miniCache, props.tableKey).searchQuery || '',
    };
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
    const { columns, rows: originalRows, config = {} } = this.props;
    const { itemsPerPage, currentPage, searchQuery, filteredRows: stateFilteredRows } = this.state || {};
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
    const entriesLabels = entryCountLabels || defaultEntryCountLabels;

    return (
      <div>
        <DatatableOptions
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={itemsPerPageOptions}
          itemsPerPageLabel={itemsPerPageLabel}
          onPageSizeChange={this.handlePageSizeChange.bind(this)}
          onSearch={this.handleSearchQueryChange.bind(this)}
          searchLabel={searchLabel}
          searchPlaceholder={searchPlaceholder}
        />
        <table className="spicy-datatable">
          <thead>
            <tr>
              {columns.map(c =>
                <th key={c.key}>
                  {c.label}
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) =>
              <tr
                key={i}
                onClick={r.onClickHandler ? r.onClickHandler : () => undefined}
                style={{ cursor: r.onClickHandler ? 'pointer' : 'default' }}
                className={r.isActive ? 'spicy-datatable--selected-row' : ''}
              >
                {columns.map((c, i) =>
                  <td key={i}>
                    {r[c.key]}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
        <div className="spicy-datatable-counter">
          {total > 0 ?
          <p>
            {entriesLabels[0]} {fromEntries} {entriesLabels[1]} {toEntries} {entriesLabels[2]} {total} {entriesLabels[3]}
          </p> : <p>{noEntriesLabel || defaultNoEntiresLabel}</p>}
        </div>
        <Pagination
          onPage={this.handlePagination.bind(this)}
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
