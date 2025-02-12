//  Write a function that accepts an array and returns the sum of it's elements

arr=[1,2,5,10,10]


function sumARR(arr1){
let sum=0
    arr1.forEach(value => {
        sum+=value;
    });
    return sum
}
console.log(sumARR(arr))