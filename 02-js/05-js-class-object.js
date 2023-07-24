
// OOP features 

class Animal {

    petName;
    food;

    // constructor(petName = "asdf", food = "rice") {
    constructor(petName, food) {
        this.petName = petName;
        this.food = food;
    };

    sound() {
        console.log(this);
    };

    sound2 = () => {
        console.log(this);
    };
}

// // java 
// Animal obj = new Animal();

// const obj = new Animal();
// obj.petName = "Harry";
// console.log(obj.petName);
// obj.sound();

const obj2 = new Animal('Sonu', 'Pedigree');
console.log(obj2.petName, obj2.food);
obj2.sound();
obj2.sound2(); // error 


class Dog extends Animal {

}

const obj3 = new Dog();
console.log(obj3);




// function fun1() {
//     console.log(this);
// };

// const fun2 = () => {
//     console.log(this);
// };


// fun1();
// fun2();

