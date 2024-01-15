

import { merge } from '../src/merge';

describe('merge', () => {
  it('should merge two sorted arrays', () => {
    const arr1 = [1, 3, 5, 7];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('should handle one empty array', () => {
    const arr1: number[] = [];
    const arr2 = [2, 4, 6, 8];
    const result = merge(arr1, arr2);

    expect(result).toEqual([2, 4, 6, 8]);
  });

  it('should handle two empty arrays', () => {
    const arr1: number[] = [];
    const arr2: number[] = [];
    const result = merge(arr1, arr2);

    expect(result).toEqual([]);
  });

});
