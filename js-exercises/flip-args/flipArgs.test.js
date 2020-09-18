import { flipped } from './flipArgs';

describe('Use Math functions', () => {
  test('should use flipped function to get correct values', () => {
    expect(flipped('a', 'b', 'c', 'd')).toMatchObject(['d', 'c', 'b', 'a']);
    expect(flipped(1, 2, 3)).toMatchObject([3, 2, 1]);
    expect(flipped(true)).toMatchObject([true]);
  });
});
