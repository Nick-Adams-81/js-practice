"use strict"

let myArr = [1, 1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 7, 8]



let newArr = [...new Set(myArr)]

console.log(newArr)