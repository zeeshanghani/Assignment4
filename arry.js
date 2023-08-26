"use strict";
//Create a function that takes an array, an index, and a value as parameters.
// Inside the function, 
//use the splice method to insert the value at the specified index in the array.
// Return the modified array
// var arry:number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(arry.length)
// arry.splice(5, 0, 110, 45, 55, 34)
// console.log(arry)
// arry.push(110)
// arry.pop()
// arry.shift()
// arry.unshift(5,6)
// console.log(arry)
// console.log(arry.length)
var arry = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function insArry(num1, num2, num3) {
    arry.splice(num1, num2, num3);
    console.log(arry);
    console.log(arry.length);
    return arry;
}
// var reinsArry:any=insArry(4,0,550,11,);
// reinsArry.splice(9,0,45,55,33,99,)
// // reinsArry=reinsArry,11,44,22,
// console.log(reinsArry)
// console.log(reinsArry.length)
insArry(1, 0, 7);
