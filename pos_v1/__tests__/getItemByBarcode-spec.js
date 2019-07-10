const getItemByBarcode = require('../getItemByBarcode');

it ('should add two numbers', () => {
    expect(getItemByBarcode("ITEM000001")).toEqual({
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
     });
});