import { filterRows } from '../utils.js';

  const testRows = [
    { prop1: 'Test #1', prop2: 'test1234', prop3: 400 },
    { prop1: 'Test #2', prop2: 'testtest', prop3: [1,2,3] },
    { prop1: 'Test #3', prop2: null, prop3: undefined },
  ];
  const testColumns = [{key: 'prop1'}, {key: 'prop2'}, {key: 'prop3'}];

describe('filterRows() to return the properly filtered table rows based on query string', () => {

  it('Finds all matching rows', () => {
    expect(filterRows(testRows, testColumns, 'Test #').length).toEqual(3);
    expect(filterRows(testRows, testColumns, 'Test #1').length).toEqual(1);
    expect(filterRows(testRows, testColumns, 'sttest').length).toEqual(1);
    expect(filterRows(testRows, testColumns, '1234').length).toEqual(1);
  });
  it('Returns all rows when there is no search query.', () => {
    expect(filterRows(testRows, testColumns, '').length).toEqual(3);
    expect(filterRows(testRows, testColumns).length).toEqual(3);
    expect(filterRows(testRows, testColumns, null).length).toEqual(3);
  });
  it('Ignores undefined and null values.', () => {
    expect(filterRows(testRows, testColumns, 'null').length).toEqual(0);
    expect(filterRows(testRows, testColumns, 'undefined').length).toEqual(0);
  });
  it('Finds all matching rows despite type missmatch', () => {
    expect(filterRows(testRows, testColumns, '400').length).toEqual(1);
    expect(filterRows(testRows, testColumns, '1,2,3').length).toEqual(1);
  });
  it('Returns no results when not fit is found', () => {
    expect(filterRows(testRows, testColumns, 'Jon Snow').length).toEqual(0);
  });

});
