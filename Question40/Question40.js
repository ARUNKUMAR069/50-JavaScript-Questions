//  Write a program that creates a copy of an array without mutating the original
arr=[1,2,3,4,5,6,7]
arrcopy=[]
// console.log(arr.copyWithin(arrcopy))

for (let i = 0; i < arr.length; i++) {

arrcopy.push(arr[i])    
}
console.log(arrcopy)