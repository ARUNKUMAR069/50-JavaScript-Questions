//  Use for loop to reverse an array [1,2,3,4]

let actualarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let revarr = []
for (let i = actualarr.length - 1; i >= 0; i--) {
    revarr.push(actualarr[i])
}
console.log(revarr)


// or 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

for (let i = 0; i < Math.floor(arr.length / 2); i++) {

    let temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}
console.log(arr)