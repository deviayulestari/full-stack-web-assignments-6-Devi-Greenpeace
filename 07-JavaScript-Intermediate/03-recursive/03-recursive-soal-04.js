function trianglePattern(col, row) { 
    if (col === 0) {
        return "";
    }
    let alphabet = "";
    for (let i = 0; i < row; i++) {
        if (i < col-1) {
            alphabet += " "; 
        }else{
            alphabet += String.fromCharCode(64 + (row - col + (i - col) + 2));
        }
    }
    console.log(alphabet);
    col = col-1;
    return trianglePattern(col, row);
}

console.log(trianglePattern(5, 5));