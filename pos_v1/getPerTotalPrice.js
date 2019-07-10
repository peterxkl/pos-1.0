const getPerSavePrice = require('./getPerSavePrice');
const getPerOriginalPrice = require('./getPerOriginalPrice');

function getPerTotalPrice (peritemDetail) {
    let originalPrice=getPerOriginalPrice(peritemDetail);
    let savePrice=getPerSavePrice(peritemDetail);
    return originalPrice-savePrice;
}

module.exports = getPerTotalPrice;