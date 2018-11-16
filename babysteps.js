

function onlyNumbersSum(valuesArray){
    valuesArray.splice(0,2);
    v = valuesArray.length;
    sum = 0
    for (i=0;i<v;i++){
        sum += Number(valuesArray[i]);
    }    
    return sum;
    
}


returnValues = process.argv;
sum = onlyNumbersSum(returnValues);
console.log(sum);

