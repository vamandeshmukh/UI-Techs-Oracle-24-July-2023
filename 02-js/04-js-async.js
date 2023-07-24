
// How to make JS synchronous when needed? 

// Asynchronous JS  

// problems with async JS 

// console.log('one');

// const getFun = () => {
//     setTimeout(() => {
//         return { text: 'two' };
//     }, 2000);
// };

// const fun = getFun();
// console.log(fun.text);

// console.log('three');

// solution 1 - callback 

// console.log('one');

// const getFun = (cb) => {
//     setTimeout(() => {
//         cb({ text: 'two' });
//     }, 2000);
// };

// getFun((arg) => {
//     console.log(arg.text);
//     console.log('three');
// });

// solution 2 - Promise 

// Promise 
// - pending  
// - resolve
// - reject 

// console.log('one');

// const getFun = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false; // true, false 
//             if (error) {
//                 reject({ message: 'value not available' });
//             }
//             else {
//                 resolve({ text: 'two' });
//             }
//         }, 2000);
//     });
// };

// getFun()
//     .then((fun) => {
//         console.log(fun.text);
//         console.log('three');
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

// solution 3 - async await to handle promise 

console.log('one');

const getFun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false; // true, false 
            if (error) {
                reject({ message: 'value not available' });
            }
            else {
                resolve({ text: 'two' });
            }
        }, 2000);
    });
};

const fun = async () => {
    const output = await getFun();
    console.log(output.text);
    console.log('three');
};

fun();
