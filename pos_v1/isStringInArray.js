function isStringInArray (string,array) {
    let flag=0;
    for(let i = 0;i < array.length; i++){
        if(array[i] == string){
            flag = 1;
            return true;
        }
    }
    if(flag == 0){
        return false;
    }
}

module.exports = isStringInArray;