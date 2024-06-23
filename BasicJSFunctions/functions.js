//normal function
function sum(a,b){
    return a+b;
}
console.log("Normal Function ",sum(1,2));

//function expression
const add = function(a,b){
    return a+b;
}
console.log("Function Expression ",add(5,3))

//anonoymous function
console.log("Anonymous Function ", function(a,b){return a+b}(5,2))

//arrow function
const addition = (a,b) => a+b;
console.log("Arrow function ", addition(8,2))

//callback function
function callback(x,y){
    return x+y;
}
let a = 3, b = 4;
let result = callback(a,b);
console.log("Callback", result)

//higher order function - takes function as argument and returns function
function display(x,y,operation){
    var result = operation(x,y);
    console.log("Higher Order Function ", result)
}
display(5,6,add)

function hof(func){
    func();
}
hof(sayHello = () => console.log("Hello"));

// //event handling
// {/* <button id="myButton">Click Me</button> */}
// //Get a reference to the button element
// const button = document.getElementById('myButton');

// //Add an event listerener for the 'click' evenet
// button.addEventListener('click',function(){
//     alert('Button clicked');
// })


//function currying
//transform a function that takes multiple arguments into a nested series of functions that each take a single argument
function multiply(a){
    return function(b){
        return a*b;
    }
}

const double = multiply(2);
console.log("Currying ", double(5))

//call, apply, bind
const p1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const p2 = {
    firstName: "Jane",
    lastName: "Doe"
  };
  
  // Using call
  console.log(p1.fullName.call(p2)); // Output: "Jane Doe"
  
  // Using apply
  console.log(p1.fullName.apply(p2)); // Output: "Jane Doe"
  
  // Using bind
  const boundFullName = p1.fullName.bind(p2);
  console.log(boundFullName()); // Output: "Jane Doe"


//closure
//closure is a combination of a function and the lexical environment


//promise
//Promises are a way too handle asynchronous operations in JavaScript. A promise represnts a value that may not be able to resolve now, but will eventually resolve.

const myPromise = new Promise((resolve,reject)=> {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random()*10);
        if(randomNum <5){
            resolve(`Success! Random number: ${randomNum}`)
        }
        else {
            reject(`Failure! Random number: ${randomNum}`)
        }
    }, 1);
})
myPromise.then((result) => {
    console.log(result) //if there's an API, we retrieve the data here
})
.catch((error) => {
    console.log(error)
});
   

//map
const num = [1, 2, 3, 4, 5];
const squaredNumbers = num.map(number => number * number);
console.log(squaredNumbers); // sqaured nums: [1, 4, 9, 16, 25]

//reduce
const nums = [1, 2, 3, 4, 5];
const sums = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sums); // sum of all nums: 15

//filter
const numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); // Odd nums: [1, 3, 5]

//this keyword
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName()); // Output: "John Doe"

  //factory function
  //A factory function in JavaScript is a function that returns an object.
  function createPerson(name, age) {
    return {
      name: name,
      age: age,
      greet: function() {
        console.log("Hello, my name is ${this.name} and I am ${this.age} years old.");
      }
    };
  }
  
  // Creating instances using the factory function
  const person1 = createPerson('Alice', 30);
  const person2 = createPerson('Bob', 25);
  
  // Using the objects created by the factory function
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
  