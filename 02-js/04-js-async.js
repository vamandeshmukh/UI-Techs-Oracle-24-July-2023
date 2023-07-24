
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

console.log('one');
const getFun = (cb) => {
    setTimeout(() => {
        cb({ text: 'two' });
    }, 2000);
};

getFun((arg) => {
    console.log(arg.text);
    console.log('three');
});


