//  Write a function that accepts a string and returns it reverse

function ReverseStr(str){

    return str.split("").reverse().join('');
}

console.log(ReverseStr("fuckme"))