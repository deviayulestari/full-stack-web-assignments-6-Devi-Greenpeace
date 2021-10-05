const sumOfArray = require('./03-recursive-soal-01');

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];

const avg1 = countAvg(arr1);
const avg2 = countAvg(arr2);

function countAvg(arr){
    sum = sumOfArray(arr);
    length = arr.length;

    return sum / length;
}

function countAboveAvg(arr, avg) {
    let checkArr = arr[0] >= avg;
    if(arr.length === 1){
        return checkArr; 
    }
    arr.shift();
    return checkArr + countAboveAvg(arr, avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);