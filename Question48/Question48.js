// Create a function to find the largest number in an array

arr=[1,2000,30000000,4,555,60,70,8,90,5]
function finLarge(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1]){

            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }

    }
    return console.log(arr[arr.length-1])
}
finLarge(arr)