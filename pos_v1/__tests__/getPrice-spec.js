const getPrice = require('../getPrice');

it ('should add two numbers', () => {
    expect(getPrice([{
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        number:3
    }])).toEqual([{
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        number:3,
        totalPrice:6.00,
        savePrice:3.00
     }]);
});