let valueA = 72;
let valueB = 117;
let resultArray = [];
let carryArray = [];



function convertToBinary(value){

    let binaryArray = [];
  
    for (let i=8;i>0;i--){
        binaryArray.push(Math.floor(value/(Math.pow(2,i-1))));
        value = value%(Math.pow(2,i-1));
    }
    return binaryArray.reverse()
}


function leastSignificantBit(value1,value2){
    return value1 ^ value2;
}
function leastSignificantCarry(value1,value2){
    return value1 & value2;
}

function nextSignificantBit(value1,value2,value3){
    return (value1 ^ value2) ^ value3;
}
function nextSignificantCarry(value1,value2,value3){
    return (value1 & value2) | (value1 & value3) | (value2 & value3)
}

let arrayA = convertToBinary(valueA);
console.log(arrayA);
let arrayB = convertToBinary(valueB);
console.log(arrayB);

resultArray[0] = leastSignificantBit(arrayA[0],arrayB[0]);
carryArray[0] = leastSignificantCarry(arrayA[0],arrayB[0]);
for (let i=1;i<=7;i++){


carryArray[i] = nextSignificantCarry(arrayA[i],arrayB[i],carryArray[i-1]);
resultArray[i] = nextSignificantBit(arrayA[i],arrayB[i],carryArray[i-1]);
};
console.log(carryArray);
console.log(resultArray);
