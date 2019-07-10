const getPromotionType = require('../getPromotionType');

it ('should add two numbers', () => {
    expect(getPromotionType("ITEM000001")).toBe("BUY_TWO_GET_ONE_FREE");
});