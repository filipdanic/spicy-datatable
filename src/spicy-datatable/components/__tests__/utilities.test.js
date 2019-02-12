import { getPaginationButtons } from '../utilities';

describe('getPaginationButtons() builds a list of pagination items', () => {
  it('passess all test cases', () => {
    expect(getPaginationButtons(5, 1, 10)).toEqual([0, 1, 2, "ellipsis", 9]);
    expect(getPaginationButtons(10, 5, 100)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, "ellipsis", 99]);
    expect(getPaginationButtons(7, 0, 20)).toEqual([0, 1, 2, 3, 4, "ellipsis", 19]);
    expect(getPaginationButtons(6, 2, 10)).toEqual([0, 1, 2, 3, "ellipsis", 9]);
    expect(getPaginationButtons(10, 120, 1000)).toEqual([0, "ellipsis", 117, 118, 119, 120, 121, 122, 123, "ellipsis", 999]);
  });
});
