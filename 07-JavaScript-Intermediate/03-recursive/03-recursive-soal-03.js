const arr = [1, 2, 3, 4, 5];

function searchInArray(arr, num) {
    let index = arr.length-1;
    if (arr.length === 0) {
        return "angka tidak ditemukan"
    }
    if(arr[index] === num){
        return "angka ditemukan pada index: " + index;
    }
    let newArr = arr.slice(0, -1);
    return searchInArray(newArr, num)
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));