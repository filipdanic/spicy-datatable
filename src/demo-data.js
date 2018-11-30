import rows from './demo-data-rows.js';
/**
 * customOptions and customFilter are used for #demo 2
 * they serve as an example of how to customize the options and labels in the datatable
 */
const customFilter = (rows, columns, searchQuery = '') => {
  // custom logic filter –> looks for match of the searchQuery in the name field only
  return rows.filter(row => row.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
};

const customOptions = {
  itemsPerPageOptions: [5, 10, 15, 20, 25, 30],
  itemsPerPageLabel: 'Broj unosa po strani:',
  nextPageLabel: '>',
  previousPageLabel: '<',
  searchLabel: 'Pretaga: ',
  searchPlaceholder: 'Unesite tekst…',
  noEntriesLabel: 'Nema unosa.',
  entryCountLabels: ['Prikazano: ', 'do', 'od', 'unosa.'],
  showDownloadCSVButton: true,
  downloadCSVButtonLabel: 'Preuzmi .csv',
  customFilter
};

const columns = [{
    key: 'id',
    label: '#',
  }, {
    key: 'name',
    label: 'Name',
    sort:true
  }, {
    key: 'email',
    label: 'Email',
  }, {
    key: 'state',
    label: 'State',
    sort:true
  },
];

export default {
  columns,
  rows,
  customOptions,
};
