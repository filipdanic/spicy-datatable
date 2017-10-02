# spicy-datatable

A React.js datatables without jQuery. Smart datatable component that includes search, pagination, CSV export, and localization support.

[DEMO: ReactJS Datatables in Action!](https://build-evgarwptse.now.sh/)

Jump to: [installing](#install), [required props](#required-prop-docs), [customization and localization via config](#config-prop), [styling](#styling), [roadmap](#roadmap), [contributing](#contribute).

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

This is great if you want to change the text or localize your component. Here’s an overview of all the options you can specify via the `config` object.

_See the [customOptions object in the demo data](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) for an example of how it is used in example #2 on the demo page._

### Pagination Config

- **`itemsPerPageOptions`**: an `Array` of `Number`s, defaults to `[10, 25, 50, 100]`,
- **`itemsPerPageLabel`**: a `String`, defaults to `Entries per page:`
- **`nextPageLabel`**: a `String`, defaults to `Next`
- **`previousPageLabel`**: a `String`, defaults to `Back`

### Search Config

- **`searchLabel`**: a `String`, defaults to `Search:`
- **`searchPlaceholder`**: a `String`, defaults to `Type to search…`

### CSV Export Config

- **`showDownloadCSVButton`**: a `Boolean` to turn the CSV export on or off, defaults to `false`.
- **`downloadCSVButtonLabel`**: a `String` to change the label on the CSV button, defaults to `Export CSV`.

### Misc Labels

- **`noEntriesLabel`**: a `String`, defaults to `No entries to show.`
- **`entryCountLabels`**: an `Array` of `String`s, defaults to `['Showing', 'to', 'of', 'entries.']`. Prints out _Showing 10 to 20 of 300 entires._ at the bottom of the table.

### Custom Filter

- **`customFilter`**: a `Function()` that can be used to override the default search logic. It will get three params: `(rows, columns, searchQuery)` and should return a new `rows` of type `Array`.

__**Example:**__

Say you want to only search for matches in the `name` column while ignoring case sensitivity:

```javascript
const customFilter = (rows, columns, searchQuery = '') => {
  return rows.filter(row => row.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
}
```

## Styling

Out of the box, `spicy-datatable` is bare-bones. Include this [CSS starter file](https://github.com/filipdanic/spicy-datatable/blob/master/src/sample-styles.css) in your project to get the look from the demo. Edit it to suit your needs.

## FAQ

Q: I want the search feature to account for accidental typos (or implement a different type of logic altogether).
A: Check the [prop config object](#config-prop), it has a `customFilter` options. Here’s a [sample object](https://github.com/filipdanic/spicy-datatable/blob/master/src/demo-data.js) that has a custom filter function.

Q: Is this component compatible with React 15.5.x?
A: Yep! And we’ll be switching to 16.x.x once it’s stable.

Q: Is the CSV export supported by MS Edge / Internet Explorer 11?
A: Yep, and it should be supported by IE9+.

Q: There is no CSV button in my table?!
A: This CSV export is an optional feature, you need to turn it on via a [prop config object.](#config-prop)

Q: How can I style the CSV button?
A: The button has a CSS class `spicy-datatableoptions-export--button` and is wrapped by `spicy-datatableoptions-export--button-wrapper`. See the sample from the styling section.

## Roadmap

- (Optional) Bootstrap styles!
- Unit and performance tests.
- Sortable columns.
- PDF/Excel download

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
- [@scott-schmalz](https://github.com/scott-schmalz)
