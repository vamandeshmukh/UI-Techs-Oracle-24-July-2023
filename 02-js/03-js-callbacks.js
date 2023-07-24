
// Callbacks in JS 

// 

// const fun = (arg) => {
//     // code using arg
//     // return arg * 10; // supply a number 
//     return 'Hello ' + arg; // string 
// };
// fun(10);

// const gstCalc = (amount) => { return amount + (amount * 0.18) };
// console.log(gstCalc(100));
// console.log(gstCalc('abc'));





// const addNums = (i, j) => {
//     console.log(i + j);
// };

// let num1 = 10;
// let num2 = 20;
// addNums(num1, num2);

// addNums(3, 4);



const fun = (arg) => {
    console.log('fun called');
    arg();
};

const anotherFun = () => {
    console.log('anotherFun called');
};

fun(anotherFun);

fun(() => {
    console.log('anonymous function called');
});


