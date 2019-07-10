const getPerOriginalPrice = require('../getPerOriginalPrice');

it ('should add two numbers', () => {
    expect(getPerOriginalPrice({
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        number:3
     })).toBe(9.00);
});
