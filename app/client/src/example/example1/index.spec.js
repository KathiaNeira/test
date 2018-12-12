const sum = require('./index');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});