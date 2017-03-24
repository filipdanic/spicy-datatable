# spicy-datatable

A React.js datatables without jQuery. Smart datatable that includes search, pagination, and localization support.

[DEMO: ReactJS Datatables in Action!](https://build-evgarwptse.now.sh/)

Jump to: [installing](#install), [required props](#required-prop-docs), [customization (e.g. localization) via config](#config-prop), [styling](#styling), [roadmap](#roadmap), [contributing](#contribute).

## Install

To get started with `spicy-datatable` in your project:

```
npm i spicy-datatable --save
# or
yarn add spicy-datatable --save
```

Then, in your code:

```javascript

import SpicyDatatable from 'spicy-datatable';
// …somewhere:
<SpicyDatatable
  tableKey={key} // see below for prop documentation
  columns={columns}
  rows={rows}
  config={config} // optional, used to override chosen default settings/labels
/>

```

Now you are all set to enjoy some ReactJS datatables in your project! No jQuery or other heavy dependencies. 🙌

Look at the [demo data file](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) for examples of how the `rows` and `columns` props look.

You can also clone this repo which includes a full demo with `create-react-app` that you can use to try out the library.

## Required Prop Docs

The **`tableKey`** is a `String` used to identify the table dataset. It is required.

The **`columns`** prop is an array of colum objects which have a key and label. Like this:

```javascript
const columns = [{
    key: 'userId',
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

The **`rows`** prop is an array of objects that have the `key: value` pairs described in our columns. For example:

```javascript

const rows = [
  {
    userId: 1,
    name:  'Sansa Stark',
    email: 'sansa@winterfell.gov',
    onClickHandler: someFunction,
    isActive: true,
  },
  {
    userId: 2,
    name: 'Jon Snow',
    email: 'jon@nightswatch.gov',
    onClickHandler: someFunction,
    isActive: false,
  },
];
```

- The **`onClickHandler`** is optional. It will attach an `onClick()` callback on the row. Your handler will receive three params:
  - `event {Object}`, the proxied React click event
  - `row {Object}`, the row that was clicked
  - `index {Number}`, the index of the item within the currently visible table view
- The **`isActive`** prop is also optional. The row that has this prop set to true will have a special class applied (CSS styling purposes.)

## Config prop

You can pass a `config` prop the `<SpicyDatatable />` component to change all the default settings and labels.

This is great if you want to change the text or localize your component. Here’s an overview of all the options you can specify via the `config` object:

- **`itemsPerPageOptions`**: an `Array` of `Number`s, defaults to `[10, 25, 50, 100]`,
- **`itemsPerPageLabel`**: a `String`, defaults to `Entries per page:`
- **`nextPageLabel`**: a `String`, defaults to `Next`
- **`previousPageLabel`**: a `String`, defaults to `Back`
- **`searchLabel`**: a `String`, defaults to `Search:`
- **`searchPlaceholder`**: a `String`, default to `Type to search…`
- **`noEntriesLabel`**: a `String`, defaults to `No entries to show.`
- **`entryCountLabels`**: an `Array` of `String`s, defaults to `['Showing', 'to', 'of', 'entries.']`. Prints out _Showing 10 to 20 of 300 entires._ at the bottom of the table.
- **`customFilter`**: a `Function()` that can be used to override the default search logic. It takes three params: `(rows, columns, searchQuery)`.

See the [customOptions object in the demo data](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) for an example of how it is used in example #2 on the demo page.

## Styling

Out of the box, `spicy-datatable` is bare-bones. Include this [CSS starter file](https://github.com/filipdanic/spicy-datatable/blob/master/src/sample-styles.css) in your project to get the look from the demo. Edit it to suit your needs.

## Roadmap

- (Optional) Bootstrap styles!
- Unit and performance tests.
- Sortable columns.
- CSV/PDF/Excel download

## Contribute

There are many ways to contribute. For example:

- Test the library in your project, [open an issue](https://github.com/filipdanic/spicy-datatable/issues/new) if you find bugs or problems!
- If you are enjoying the library, star it here on Github to show your support.
- Have a feature request? Want the roadmap to hurry up? Open a feature request [via the issues tab.](https://github.com/filipdanic/spicy-datatable/issues/new)
- Fixed a problem or added a feature on your fork? Send a PR to make it part of the main distribution.
- The docs could be better? Found a typo? Submit a PR!

## Contributors

Need help with your **first PR** in OSS? Open an issue and we will find something simple and cool for you!

- [@filipdanic](https://github.com/filipdanic/)
- [@sahiljain112](https://github.com/sahiljain112)
