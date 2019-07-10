const getReceiptDetail = require('../getReceiptDetail');

it ('should add two numbers', () => {
    expect(getReceiptDetail([{
        barcode: 'ITEM000001',
        number:3
    },
    {
        barcode: 'ITEM000002',
        number:3
    },
    {
        barcode: 'ITEM000003',
        number:3
    }])).toEqual([{
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        number:3
    },
    {
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50,
        number:3
    },
    {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00,
        number:3
    }]);
});

