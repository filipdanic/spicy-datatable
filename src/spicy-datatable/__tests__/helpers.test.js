import { filterRows, getSafely, setSafely, defaultCache, range } from '../helpers.js';

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

describe('getSafely() returns the requested keys from cache or a default cache object', () => {
  it('returns the requested key', () => {
    const miniCache = { t1: { a: 1, b: 'foo' } };
    const t1 = getSafely(miniCache, 't1');
    expect(t1).toEqual(miniCache.t1);
  });
  it('returns the default cache object when ', () => {
    const miniCache = {};
    const t1 = getSafely(miniCache, 't1');
    expect(t1).toEqual(defaultCache);
  });
});

describe('setSafely() mutates the object by setting key/value pairs', () => {
  it('mutates a pre-existing store for an existing table key', () => {
    const miniCache = { t1: { a: 1, b: 'foo' } };
    setSafely(miniCache, 't1', 'a', 100);
    setSafely(miniCache, 't1', 'b', 'bar');
    expect(miniCache.t1.a).toEqual(100);
  });
  it('creates a store for a previously unknown key', () => {
     const miniCache = { t1: { a: 1, b: 'foo' } };
    setSafely(miniCache, 't2', 'a', 100);
    setSafely(miniCache, 't3', 'b', 'bar');
    expect(miniCache.t2.a).toEqual(100);
    expect(miniCache.t3.b).toEqual('bar');
  });
});

describe('range() builds a list of numbers for pagination', () => {
  it('passess all test cases', () => {
    expect(range(0, 0)).toEqual([]);
    expect(range(10, 0)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(range(10, 5)).toEqual([]);
    expect(range(10, 10)).toEqual([]);
    expect(range(10, 11)).toEqual([10]);
    expect(range(10, 20)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
  });
});
