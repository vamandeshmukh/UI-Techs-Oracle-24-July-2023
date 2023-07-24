
// Functions in JS 

// function fun() {
//     console.log('fun function');
// }

// fun();


// const addNums = (i, j) => {
//     console.log(i + j);
// };

// addNums(); // NaN 
// addNums(10); // NaN
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 30 


// console.log(11 + 12);
// console.log("11" + 12);
// console.log("11" + "12");
// console.log(11 + "12");

// dynamically typed language 
// strongly typed language 

// strongly typed language 
// // java 
// int num = 10;
// num = 20;
// num = "abc"; // error 

// dynamically typed language 
// JS 
// let someValue;
// console.log(someValue);
// console.log(typeof (someValue));
// someValue = 10;
// console.log(someValue);
// console.log(typeof (someValue));
// someValue = "abc";
// console.log(someValue);
// console.log(typeof (someValue));

// let num1 = 10;
// let num2;

// console.log(num1 + num2);

// console.log("10" + 5);
// console.log("10" + 5 - 2);
// console.log("abc" - 5);
// console.log("abc" - 5);

// const addNums = (i = 10, j = 20) => {
//     // return i + j;
//     console.log(i + j);
// };

// addNums();
// addNums(2); // 22 
// addNums(2, 3);
// addNums(2, 3, 4);
// addNums(undefined, 2); // 12 


// let output = addNums(2, 3);
// console.log(output); // undefined 

// Asynchronous JS  

console.log('one');

setTimeout(() => {
    console.log('two'); // DB call
}, 2000);

console.log('three');

