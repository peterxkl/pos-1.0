const fixtures = require('./fixtures');
const promotions=[
    {
      type: 'BUY_TWO_GET_ONE_FREE',
      barcodes: [
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]
    }
  ];
function getPromotionType (string) {
    let flag=0;
    for(let i = 0;i < promotions.length; i++){
       let typeItem=promotions[i];
       let typebarcodes=typeItem.barcodes;
       for(let j=0;j<typebarcodes.length;j++){
           if(string==typebarcodes[j]){
               flag=1;
               return typeItem.type;
           }
       }
    }
    if(flag==0){
        return "NoPromotion";
    }
}

module.exports = getPromotionType;