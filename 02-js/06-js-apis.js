
// JS APIs

// Array APIs - 

// const friends = [];

// friends.push('Sonu', 'Monu', 'Tonu');

// console.log(friends);

// friends.pop(1);

// console.log(friends);

// console.log(friends.values());

// JS Browser APIs 

// Cookie APIs 

// browser.cookie();

document.cookie = 'username=vaman;';

let myCookie = document.cookie;

// decodeURIComponent

console.log(myCookie);

const getMyCookie = () => {
    console.log(document.cookie);
};




window.addEventListener("load", function () {
    var button = document.getElementById("ageButton");
    button.addEventListener("click", function () {
        // Button click logic goes here 
    }, false);
    // closes the button event handler 
}, false);
// closes the window event handler



var ageOutputElement = document.getElementById("ageOutput");
var ageTextElement = document.getElementById("ageInput");
var ageTextValue = ageTextElement.value;
var age = parseInt(ageTextValue, 10);
var result = "";
if (isNaN(age)) {
    result = "Input a number please.";
    ageTextElement.value = "";
}
else {
    result = ((100 - age) + " years before you turn 100!");
}
console.log(result);
ageOutputElement.innerHTML = result;
