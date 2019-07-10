function getPerOriginalPrice (peritemDetail) {
    let getPerOriginalPrice=peritemDetail.price*peritemDetail.number;
    return getPerOriginalPrice;
}

module.exports = getPerOriginalPrice;