import { filterRows } from '../utils.js';

describe('filterRows() to return the properly filtered table rows based on query string', () => {
  const testRows = [{prop1: 'Test #1', prop2: 'test1234', prop3: 400}, {prop1: 'Test #2', prop2: 'testtest', prop3: [1,2,3]}];
  const testColumns = [{key: 'prop1'}, {key: 'prop2'}, {key: 'prop3'}];
  it('Finds all matching rows', () => {
    expect(filterRows(testRows, testColumns, 'Test #').length).toEqual(2);
    expect(filterRows(testRows, testColumns, 'Test #1').length).toEqual(1);
    expect(filterRows(testRows, testColumns, 'sttest').length).toEqual(1);
    expect(filterRows(testRows, testColumns, '1234').length).toEqual(1);
  });
  it('Finds all matching rows despite type missmatch', () => {
    expect(filterRows(testRows, testColumns, '400').length).toEqual(1);
    expect(filterRows(testRows, testColumns, '1,2,3').length).toEqual(1);
  });
  it('Returns no results when not fit is found', () => {
    expect(filterRows(testRows, testColumns, 'Jon Snow').length).toEqual(0);
  });

});
