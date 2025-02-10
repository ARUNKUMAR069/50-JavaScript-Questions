//  Write a for loop that skips even numbers from 1 to 20. Print the odd numbers only.
for(let i=1; i<=20;i++){
if(i%2==0){
    continue;
}
console.log(i);
}