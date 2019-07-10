const isStringInArray = require('../isStringInArray');

it ('should add two numbers', () => {
    expect(isStringInArray("ITEM000003",["ITEM000003","ITEM000002"])).toBe(true);
});