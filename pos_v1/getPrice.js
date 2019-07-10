const getPerTotalPrice = require('./getPerTotalPrice');
const getPerSavePrice = require('./getPerSavePrice');
function getPrice (itemsetDetail) {
    for(let i=0;i<itemsetDetail.length;i++){
        let item=itemsetDetail[i];
        let totalPrice=getPerTotalPrice(item);
        let savePrice=getPerSavePrice(item);
        item.totalPrice=totalPrice;
        item.savePrice=savePrice;
    }
    return itemsetDetail;
}

module.exports = getPrice;