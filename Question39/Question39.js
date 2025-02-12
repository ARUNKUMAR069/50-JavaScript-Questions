//  Sort an array of numbers [5,2,9,1] in asecding order

let arr = [5, 25, 92, 1, 700, 23, 66]

// console.log(arr.sort())
// or
for (let j = 0; j < arr.length - 1; j++) {

    for (let i = 0; i < arr.length - j - 1; i++) {

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
        }

    }

}
console.log(arr)