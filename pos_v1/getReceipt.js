const getReceiptDetail = require('./getReceiptDetail');
const getPrice = require('./getPrice');
function getReceipt (itemsetArray) {
    let result=``;
    let itemDetail=getReceiptDetail(itemsetArray);
    let itemIncludeOtherPrice=getPrice(itemDetail);
    let result_mian=``;
    let sumPrice=0;
    let allsavePrice=0;
    for(let i=0;i<itemIncludeOtherPrice.length;i++){
       let item=itemIncludeOtherPrice[i];
       sumPrice=sumPrice+item.totalPrice;
       allsavePrice=allsavePrice+item.savePrice;
       result_mian=`${result_mian}名称：${item.name}，数量：${item.number}${item.unit}，单价：${item.price}(元)，小计：${item.totalPrice}\n`;
    }
    result=`***<没钱赚商店>收据***\n${result_mian}----------------------\n总计：${sumPrice}(元)\n节省：${allsavePrice}(元)\n**********************`
    return result;
}

module.exports = getReceipt;