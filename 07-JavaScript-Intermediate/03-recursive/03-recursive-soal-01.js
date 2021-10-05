const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

function sumOfArray(arr) {    
    let dupArr = [...arr];
    let sum = dupArr[0];
    if(dupArr.length === 1){
        return sum;
    } 
    sum += dupArr[1];
    dupArr.shift();
    dupArr[0] = sum;
    let value = sumOfArray(dupArr);
    return value;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

//untuk meng-exports function sumOfArray supaya bisa dipanggil di file lain
module.exports = sumOfArray;