// INITIALIZE
const name = "Juan";
let age = 21;
var hasHobbies = true;

// name = "Diego" can not assing a new value to a const

age = 22;

// FUNCTIONS
// Old way
function summarizeUser(userName, userAge, userHobbie) {
    return ("Name is " + userName + ", age is " + userAge + ", has hobbies " + userHobbie);
}
// Anonymus function
const summarizeUser1 = function(userName, userAge, userHobbie) {
    return ("Name is " + userName + ", age is " + userAge + ", has hobbies " + userHobbie);
}
// Arrow function
const summarizeUser2 = (userName, userAge, userHobbie) => {
    return ("Name is " + userName + ", age is " + userAge + ", has hobbies " + userHobbie);
}
// Oneline function
const summarizeUser3 = (userName, userAge, userHobbie) => "Name is " + userName + ", age is " + userAge + ", has hobbies " + userHobbie;

// One argument
const summarizeUser4 = userName => "Name is " + userName;

// No arguments
const summarizeUser5 = () => "Name is Juan";

console.log(summarizeUser(name, age, hasHobbies))
console.log(summarizeUser1(name, age, hasHobbies))
console.log(summarizeUser2(name, age, hasHobbies))
console.log(summarizeUser3(name, age, hasHobbies))
console.log(summarizeUser4(name))
console.log(summarizeUser5())

// Objects
const person = {
     name: "Juan",
     age: 21,
     greet() {
         return "Hi i'm " + this.name;
     }
 };

console.log(person.greet())

// Arrays

const hobbies = ['Sports', 'Photography'];
for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => {  // Do not update the array
    return "Hobby: " + hobby
}));

console.log(hobbies)
hobbies.push("Programming"); // Update the array
console.log(hobbies)

// Rest and spread operator

const copiedArray = hobbies.slice(); // Copy an array

const copiedArray2 = [...hobbies];  // Spread Operator
const copiedPerson = {...person};  // Spread Operator in objects

console.log(copiedArray)
console.log(copiedArray2)
console.log(copiedPerson)

const toArrray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

const toArrray2 = (...args) => {  // Rest Operator
    return args;
}

console.log(toArrray(1, 2, 3, 4))
console.log(toArrray2(1, 2, 3, 4))

// Destructuring

const printName = (personData) => {
    console.log(personData.name);
}

const printName2 = ({ name }) => { // Destructuring
    console.log(name);
}

printName(person)
printName2(person)


const person2 = {
    name2: "Juan",
    age2: 21,
    greet() {
        return "Hi i'm " + this.name;
    }
};
const {name2, age2} = person2; // Destructuring objects

console.log(name2, age2)

const [hobby1, hobby2] = hobbies;  // Destructuring arrays
console.log(hobby1, hobby2)


// Async


const fecthData = (callback) => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

let printText = text => console.log(text);

setTimeout(() => {
    console.log('Timer is done after 2 seconds');
    fecthData(printText)
}, 2000);


console.log('Hello') // Print first

const fecthData2 = () => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Donee');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done after 2 seconds');
    fecthData2().then(printText);
}, 2000);

// Template Literals

console.log(`My name is ${name} and I am ${age} years old.`);