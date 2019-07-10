const getOriginalPrice = require('./getOriginalPrice');
const getSavePrice = require('./getSavePrice');
function getTotalPrice (itemsetDetail) {
    let originalPrice=getOriginalPrice(itemsetDetail);
    let savePrice=getSavePrice(itemsetDetail);
    return originalPrice-savePrice;
}

module.exports = getTotalPrice;