# spicy-datatable

A React.js library for displaying datatables. Features search and pagination.

[🎉Live demo.](https://build-nincjkfjsg.now.sh/)

To, get started with `spicy-datatable` in your project:

```
npm i spicy-datatable --save
# or yarn add spicy-datatable --save
```

Then:

```javascript

import SpicyDatatable from 'spicy-datatable';

// somewhere:

<SpicyDatatable
  tableKey={key}
  columns={columns}
  rows={rows}
/>

```

Look at the [demo data file](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) for examples of how the `rows` and `columns` props look.

## Prop Demo

The `tableKey` is a String used to identify the table dataset. It is required.

The `columns` prop is an array of colum objects which have a key and label. Like this:

```javascript
const columns = [{
    key: 'id',
    label: '#',
  }, {
    key: 'name',
    label: 'Name',
  }, {
    key: 'email',
    label: 'Email',
  },
];
```

The `rows` prop is an array of objects that have the key-value pairs described in our columns. For example:

```javascript

const rows = [
  {
    id: 1,
    name:  'Sansa Stark',
    email: 'sansa@winterfell.gov',
    onClickHandler: someFunction,
    isActive: true,
  },
  {
    id: 2,
    name: 'Jon Snow',
    email: 'jon@nightswatch.gov',
    onClickHandler: someFunction,
    isActive: false,
  },
];
```

The key `onClickHandler` is optional. It will attach an `onClick()` callback on the row. The `isActive` prop is also optional. The row that has this prop set to true will have a special class applied (CSS styling purposes).

## Styling

Out of the box, SpicyDatatable is bare-bones. Include this [CSS starter file](https://github.com/filipdanic/spicy-datatable/blob/master/src/sample-styles.css) in your project to get the look from the demo. Edit it to suit your needs.

## In the Works

- More control over pagination and search.
- Unit and performance tests.
- Sortable columns.
- CSV/PDF/Excel download
- Localization support
