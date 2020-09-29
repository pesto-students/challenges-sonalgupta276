import { myForEach, myMap, myFilter, myReduce } from './arrayUtils';

describe('arrayUtils', () => {
  test('should check myForEach loop', () => {
    const mockCallback = jest.fn(x => 42 + x);
    myForEach([0, 1], mockCallback);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // The return value of the first call to the function was 43
    expect(mockCallback.mock.results[1].value).toBe(43);
  });

  test('should check myMap', () => {
    const mockCallback = jest.fn(x => x * x);
    myMap([0, 1, 2, 4], mockCallback);
    // The mock function is called 4 times
    expect(mockCallback.mock.calls.length).toBe(4);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the third call to the function was 2
    expect(mockCallback.mock.calls[2][0]).toBe(2);
    // The return value of the fourth call to the function was 16
    expect(mockCallback.mock.results[3].value).toBe(16);

    // The return value should be an array
    expect(Array.isArray(myMap([0, 1, 2, 4], mockCallback))).toBe(true);

    // Should return correct results
    expect(myMap([0, 1, 2, 4], mockCallback)).toEqual([0, 1, 4, 16]);
  });

  test('should check myFilter function', () => {
    const mockCallback = jest.fn(x => x > 20);
    myFilter([10, 21, 42, 4], mockCallback);
    // The mock function is called 4 times
    expect(mockCallback.mock.calls.length).toBe(4);

    // The first argument of the first call to the function was 10
    expect(mockCallback.mock.calls[0][0]).toBe(10);

    // The first argument of the third call to the function was 2
    expect(mockCallback.mock.calls[2][0]).toBe(42);
    // The return value of the fourth call to the function was 16
    expect(mockCallback.mock.results[3].value).toBe(false);

    // The return value should be an array
    expect(Array.isArray(myFilter([10, 21, 42, 4], mockCallback))).toBe(true);

    // Should return correct results
    expect(myFilter([10, 21, 42, 4], mockCallback)).toEqual([21, 42]);
  });

  // test('should check myReduce function', () => {
  //   const mockCallback = jest.fn((x, initial) => x + initial, 0);
  //   myReduce([1, 2, 3, 4], mockCallback, 0);
  //   // The mock function is called 4 times
  //   expect(mockCallback.mock.calls.length).toBe(4);

  //   // The first argument of the first call to the function was 1
  //   expect(mockCallback.mock.calls[0][0]).toBe(1);

  //   // The first argument of the third call to the function was 3
  //   expect(mockCallback.mock.calls[2][0]).toBe(3);

  //   // The return value of the fourth call to the function was 7
  //   expect(mockCallback.mock.results[3].value).toBe(10);

  //   // Should return correct results
  //   expect(myReduce([1, 2, 3, 4], mockCallback)).toBe(10);
  // });
});
