//  Write a nested loop to print a 3x3 grid of numbers
let row = 3
let col = 3
let hold = 1
for (var i = 1; i <= row; i++) {
     str = ""
    for (var j = 1; j <= col; j++) {
        str +=` ${hold} `;
        hold++
    }
    console.log(str)
}