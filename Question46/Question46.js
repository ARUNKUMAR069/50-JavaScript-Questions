//  Create a Function that takes a number and returns it's factorial

let num=4
function factCalc(num){

let fact=1
for (let i = 1; i <=num; i++) {

    fact*=i;
}
return fact;
}
console.log(factCalc(num))