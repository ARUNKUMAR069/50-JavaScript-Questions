// Find and log the second element of an array
arr = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < arr.length; i++){

    if (arr[i] === arr[1]){
        console.log(arr[i], "found")
        break;
    }
    
}