//  Create a function to calculate the area of a circle with a given radius


radius=4.5

function CircleArea(radius){


if(radius>0){

return console.log(Math.PI*(Math.pow(radius,2)))

}
return console.log(" Enter value greater than 0")

}

console.log(CircleArea(radius))