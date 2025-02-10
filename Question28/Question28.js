//  Use for loop to reverse an array [1,2,3,4]

let actualarr = [1, 2, 3, 4,5,6,7,8,9,10]
let revarr = []
for (let i =actualarr.length-1; i >= 0; i--) {
    revarr.push(actualarr[i])
}
console.log(revarr)