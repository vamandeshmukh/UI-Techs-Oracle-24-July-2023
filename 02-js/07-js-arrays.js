
// Arrays in JS 

const arr1 = ['abc', 'def', 'ghi']; // literal 
const arr2 = new Array('abc', 'def', 'ghi'); // cosntructor 
const arr3 = Array('abc', 'def', 'ghi'); // cosntructor 
const arr4 = [];
const arr5 = Array.of('abc', 'def', 'ghi');

const arr6 = ['abc', 'def', 'ghi'];
const obj6 = { 0: 'abc', 1: 'def', 2: 'ghi' };

// // console.log(arr1.length);
// // console.log(arr4.length);
// // console.log(arr1[2]);
// // console.log(arr1[5]); // udnefiled 

// console.log(arr1.length);
// arr1.length = 5;
// console.log(arr1.length);
// console.log(arr1[2]);
// arr1.length = 2;
// console.log(arr1.length);
// console.log(arr1[2]);
// arr1.length = 0;
// console.log(arr1.length);
// console.log(arr5);


// const arr7 = [2.4];
// console.log(arr7.length);
// arr7[2.4] = 'abc';
// console.log(arr7);

// const arr8 = ['abc', 'def', 'ghi'];

// for (let i = 0; i < arr8.length; i++)
//     console.log(arr8[i]);

// // for in loop - returns indexes 
// for (let a in arr8)
//     console.log(a);

// // for of loop - returns elements 
// for (let a of arr8)
//     console.log(a);

// forEach method 

// arr8.forEach((elem) => {
//     // code 
//     console.log(elem);
// });
// arr8.forEach(a => console.log(a));

// const fun = (a) => { };
// const fun2 = a => { };
// const fun3 = (a, b) => { };
// const fun4 = (a, b) => { };
// const fun5 = a => { return a + 10; };
// const fun6 = a => a + 10;


const arr9 = ['abc', 'def', 'ghi'];

const num = arr9.findIndex(ind => typeof (ind) === "number");

console.log(num);






