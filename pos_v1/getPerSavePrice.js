const getPromotionType = require('./getPromotionType');

function getPerSavePrice (peritemDetail) {
    let savePrice=0;
    let promotionType=getPromotionType(peritemDetail.barcode);
    if(promotionType=="BUY_TWO_GET_ONE_FREE"){
        savePrice=(peritemDetail.number/3)*peritemDetail.price;
    }
    return savePrice;
}

module.exports = getPerSavePrice;