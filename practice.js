"use strict";


//Fizz-buzz

for(let i = 1; i < 50; i++) {
    if(i % 15 === 0) {
        console.log("fizz-buzz!")
    } else if(i % 3 === 0) {
        console.log("Fizz")
    } else if(i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}