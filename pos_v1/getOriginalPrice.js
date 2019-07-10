function getOriginalPrice (itemsetDetail) {
    let originalPrice=0;
    for(let i=0;i<itemsetDetail.length;i++){
        let good=itemsetDetail[i];
        originalPrice=originalPrice+good.price*good.number;
    }
    return originalPrice;
}

module.exports = getOriginalPrice;