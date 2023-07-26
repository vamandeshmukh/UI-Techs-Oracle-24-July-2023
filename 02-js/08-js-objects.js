
// Objects in JS 

// const arr10 = ['abc', 'def', 'ghi'];
// const obj11 = { a: 'abc', d: 'def', g: 'ghi' };
// console.log(typeof (arr10));
// console.log(typeof (obj11));


// const obj1 = { firstName: 'Sonu', salary: 100 }; // object literal 

// class Person {
//     firstName;
//     salary;
//     constructor(firstName, salary) { this.firstName = firstName, this.salary = salary };
// }

// const obj2 = new Person('Sonu', 100); // object of a class 

// const obj3 = {};
// console.log(obj3);
// // obj3 = 'asdf'; // Error 
// // obj3 = {firstName : 'Monu'}; // Error 
// obj3.firstName = 'Monu'; // Works 
// console.log(obj3);

const obj4 = {
    firstName: 'Sonu',
    salary: 100,
    sayHi() {
        // console.log(`Hi. I am ${this.firstName}.`);
        console.log(this);
    }
};

const obj5 = {
    firstName: 'Monu',
    salary: 200,
    sayHi: () => {
        // console.log(`Hi. I am ${this.firstName}.`);
        console.log(this);
    }
};

// obj4.sayHi();
// obj5.sayHi();



const obj6 = {
    firstName: 'Tonu',
    salary: 300,
    sayHi() {
        console.log(`Hi. My name is ${this.firstName} and I am from ${this.address.city}.`);
    },
    isMarried: false,
    phones: [9876, 98765],
    address: {
        city: 'Pune',
        pin: 400001
    }
};

// obj6.sayHi();


// const obj7 = { a: 'abc', d: 'def', g: 'ghi', j() { console.log('asdf'); } };
const obj7 = { a: 'abc', d: 'def', g: 'ghi' };

// console.log(obj7);
// console.log(Object.keys(obj7));
// console.log(Object.values(obj7));
// console.log(Object.entries(obj7));

// for (let [key, value] of Object.entries(obj7)) {
//     console.log(key, value);
// }

// JSON to JavaScript 

// const jsonData = '{ "a": "abc", "d": "def", "g": "ghi" }';

// const jsonData = '{ "firstName": "Sonu", "salary": 100, "isMarried": false }';
const jsonData = '{ "firstName "Sonu", "salary": 100, "isMarried": false }';

let jsObj = '';

try {
    jsObj = JSON.parse(jsonData);
} catch (error) {
    jsObj = 'Something is wrong!'
}

// console.log(jsObj);

const jsonData2 = '[{ "firstName": "Sonu", "salary": 100}, { "firstName": "Monu", "salary": 150}]';

let jsArr = JSON.parse(jsonData2);

console.log(jsArr);



