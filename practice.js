// "use strict";


// Fizz-buzz //
for(let i = 1; i < 50; i++) {
    if(i % 15 === 0) {
        console.log("fizz-buzz!");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Reverse a string //
const reverseString = (string) => {
    return string.split("").reverse().join("");
}

console.log(reverseString("hello"));


// isPalindrome //
const isPalindrome = (string) => {
    const reverseString = string.split("").reverse().join("");
    return string === reverseString;
}

console.log(isPalindrome("racrcars"));


// Fibonachi sequence //
const fibonachi = (num) => {
    let a = 0;
    let b = 1;
    for(let i = 0; i < num; i++) {
        let x = a;
        a = b;
        b = b + x;
    }

    return a;
}

for(let i = 0; i < 10; i++) {
    console.log(fibonachi(i));
}

// count a strings length //
const stringLength = (string) => {
    return string.length;
}

console.log(stringLength("hello world"));

// Remove vowels from a string //
const removeVowels = (string) => {
    return string.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("hello cruel world!"));

// Print second to last word in a string //
const nextToLastWord = (string) => {
    let splitStr = string.split(" ");
    return splitStr[splitStr.length - 2];

}

console.log(nextToLastWord("hello my world"));




// Count vowels in a string //
const countVowels = (string) => {
    let count = string.match(/[aeiou]/gi).length;
    return count;
}

console.log(countVowels("hello cruel world"));


// Convert a string to Camel Case //
const camelCase = (string) => {
    return string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

}

console.log(camelCase("hello this awesome world"));




