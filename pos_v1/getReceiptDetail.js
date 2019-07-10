const getItemByBarcode = require('./getItemByBarcode');
function getReceiptDetail (itemset) {
    let itemsetDetail=[];
    for(let i=0;i<itemset.length;i++){
        let item_start=getItemByBarcode(itemset[i].barcode);
        let item_end={
            barcode:item_start.barcode,
            name:item_start.name,
            unit:item_start.unit,
            price:item_start.price,
            number:itemset[i].number
        }
        itemsetDetail.push(item_end);
    }
    return itemsetDetail;
}

module.exports = getReceiptDetail;