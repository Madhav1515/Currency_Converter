const { convertCurrency } = require('../currencyConverter');

test('converts 100 INR to USD at 0.012 rate', () => {
  expect(convertCurrency(100, 0.012)).toBe(1.2);
});

test('converts 50 INR to EUR at 0.010 rate', () => {
  expect(convertCurrency(50, 0.010)).toBe(0.5);
});
