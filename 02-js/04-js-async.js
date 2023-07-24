
// How to make JS synchronous when needed? 

// Asynchronous JS  

// problems with async JS 

// console.log('one');

// setTimeout(() => {
//     console.log('two'); // DB call
// }, 2000);

// console.log('three');

console.log('one');

const getFun = () => {
    setTimeout(() => {
        return { text: 'two' };
    }, 2000);
};

const fun = getFun();
console.log(fun.text);

console.log('three');

