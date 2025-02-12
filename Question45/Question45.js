//  Write a function to find the maxium of two numbers
function maxin2(num1, num2) {
    if (num1 > num2) {
        return console.log(`${num1} is Greater`)
    }
    else if (num1 < num2) {
        return console.log(`${num2} is Greater`)
    }
    else{
        return console.log(`${num1} and ${num2} are Equal`)
    }
}

maxin2(10, 10)