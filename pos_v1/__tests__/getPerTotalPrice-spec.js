const getPerTotalPrice = require('../getPerTotalPrice');

it ('should add two numbers', () => {
    expect(getPerTotalPrice({
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        number:3
     })).toBe(6);
});