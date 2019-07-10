const getReceipt = require('../getReceipt');

it ('should add two numbers', () => {
    expect(getReceipt([{
        barcode: 'ITEM000000',
        number:3
    },
    {
        barcode: 'ITEM000001',
        number:6
    }])).toBe(`***<没钱赚商店>收据***
名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：6.00(元)
名称：雪碧，数量：6瓶，单价：3.00(元)，小计：12.00(元)
----------------------
总计：18.00(元)
节省：6.00(元)
**********************`);
});

