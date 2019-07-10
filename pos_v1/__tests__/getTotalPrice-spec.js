const getTotalPrice = require('../getTotalPrice');

it ('should add two numbers', () => {
    expect(getTotalPrice([{
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        number:3
     },
     {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        number:6
     }])).toBe(18.00);
});