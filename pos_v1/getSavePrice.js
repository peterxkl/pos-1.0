const getPromotionType = require('./getPromotionType');

function getSavePrice (itemsetDetail) {
    let savePrice=0;
    for(let i=0;i<itemsetDetail.length;i++){
        let good=itemsetDetail[i];
        let promotionType=getPromotionType(good.barcode);
        let price=0;
        if(promotionType=="BUY_TWO_GET_ONE_FREE"){
            price=(good.number/3)*good.price;
        }
        savePrice=savePrice+price;
    }
    return savePrice;
}

module.exports = getSavePrice;