# spicy-datatable

A React.js datatables without jQuery or other dependencies. Includes search and pagination.

[DEMO: ReactJS Datatables in Action!](https://build-pkdluocqsu.now.sh)

Jump to: [installing](#install), [required props](#required-prop-docs), [costumization via config](#config-prop), [styling](#styling), [roadmap](#roadmap).

## Install

To get started with `spicy-datatable` in your project:

```
npm i spicy-datatable --save
# or
yarn add spicy-datatable --save
```

Then:

```javascript

import SpicyDatatable from 'spicy-datatable';

// somewhere:

<SpicyDatatable
  tableKey={key}
  columns={columns}
  rows={rows}
  config={config} // optional, overrides all default settings/labels
/>

```

Now you are all set to enjoy some ReactJS datatables in your project! 🙌

Look at the [demo data file](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) for examples of how the `rows` and `columns` props look.

You can also clone this repo which includes a full semo with `create-react-app` that you can use to try out the library.

## Required Prop Docs

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

The `rows` prop is an array of objects that have the `key-value` pairs described in our columns. For example:

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

## Config prop

You can pass a `config` prop the `<SpicyDatatable />` component to change all the default settings and labels.

This is great if you want to change the text or localize your component. Here’s an overview of all the options you can specify via the `config` object:

- `itemsPerPageOptions`: an `Array` of `Number`s, defaults to `[10, 25, 50, 100]`,
- `itemsPerPageLabel`: a `String`, defaults to `Entries per page:`
- `nextPageLabel`: a `String`, defaults to `Next`
- `previousPageLabel`: a `String`, defaults to `Back`
- `searchLabel`: a `String`, defaults to `Search:`
- `searchPlaceholder`: a `String`, default to `Type to search…`
- `noEntriesLabel`: a `String`, defaults to `No entries to show.`
- `entryCountLabels`: an `Array` of `String`s, defaults to `['Showing', 'to', 'of', 'entries.']`. Prints out `Showing 10 to 20 of 300 entires.` at the bottom of the table.

See the [customOptions object in the demo data](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) for an example of how it is used in example #2 on the demo page.

## Styling

Out of the box, `spicy-datatable` is bare-bones. Include this [CSS starter file](https://github.com/filipdanic/spicy-datatable/blob/master/src/sample-styles.css) in your project to get the look from the demo. Edit it to suit your needs.

## Roadmap

- More control over pagination and search (and a better performing search!)
- Unit and performance tests.
- Sortable columns.
- CSV/PDF/Excel download
- ~Localization support~
