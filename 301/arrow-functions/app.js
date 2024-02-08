'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.



let sum = (a, b, c, d) => a + b + c + d;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));


let objectLit = () => ({
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(objectLit());


let sumAndProduct = (a, b) => [a + b, a * b];

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));


let message = name => `Hello, ${name}!`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

let joe = new Student('Joe', 'Schmoe', 100);

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.prototype.greeting = function() {
  return `Hi, my name is ${this.name}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());

// TODO: After viewing the previous console.log(), return the code to a working state.



Student.courseName = function() {
  return 'This student is enrolled in Code 301.';
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};

// TODO: Uncomment the following line of code to see the output in the browser console
joe.scope();

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console
joe.scopeArrow();

// TODO: Write a COMMENT below to answer the following questions.

// 1. What is "this" when joe.scope() is invoked?
// It is the object instance saved to the variable 'joe'.

// 2. What is "this" when joe.scopeArrow() is invoked?
// It is the window global object.

// 3. Explain why "this" is different when an arrow function is used.
// Whenever a function is invoked, a new execution context is created for that function which
// determines what set of references are available inside its local scope (in addition to
// global scope, of course). This set of references is put in a frame and pushed onto the call
// stack. I like to think of this set of references that is the execution context as 3 types
// of references:
// 1) The local variables of the function, including its parameters.
// 2) The function's outer scope (i.e. its enclosing/'lexical' scope), which is where closures
// come from.
// 3) An object that is referenced by the 'this' keyword, which carries some additional context
// for the function. This is called context binding.

// The first two types of references for local scope and outer scope are consistent and always
// defined at function declaration. The 3rd type of reference, the 'this' keyword, can change
// depending on a specific set of rules as defined by the language because it is intended to
// hold the additional context/references of the function at runtime, not just at declaration
// time. This means that the value of 'this' must necessarily change depending on how the
// function is invoked at runtime. And basically the set of rules that define what 'this'
// should reference are the most common use cases for various common ways of invoking a
// function.

// For example:
// 1) In an object method, 'this' refers to the object (because it is the calling object).
// 2) In a constructor function, 'this' refers to the object instance being returned
// (assuming the constructor is invoked with the new operator).
// 3) In an event handler, 'this' will refer to the event target.
// 4) And if a function is invoked in a very traditional way where there is no
// useful added value to its runtime execution context, then 'this' will just reference the
// global object instead (if not in strict mode, otherwise 'this' is just undefined).

// However, the problem becomes when we start chaining nested function calls that are using
// multiple different rules from the rules above for how to define its runtime execution
// context and set/bind the 'this' value. To give an extreme example, an object method could
// call a constructor function, that calls an event handler, that calls some other callback
// function, that then calls just another normal function. At each step in the chain of calls,
// the value of 'this' will keep getting reset/rebound. But maybe somewhere in that chain of
// calls we want to hold on to the value of 'this' and preserve it down the chain. This is what
// is known as the 'lost execution context' bug.

// The most common cases where the lost execution context bug happens is with using callback
// functions.

// This is the problem that arrow functions were invented to solve. If you want to preserve
// the value of 'this' at some point in this chain of calls and avoid the rule switching
// that rebinds the value of 'this', then use an arrow function instead of a normal, non-arrow
// function.

// So in the example above, for the 'scope' method, the constructor function set the value
// of 'this' to the object instance that was created at the time when the constructor function
// was invoked. Because it is following the normal rules for setting the runtime context of
// 'this' for a constructor function that is invoked with the 'new' operator.

// However, in the second case for the 'scopeArrow' method, the arrow function does not
// override the 'this' keyword with any special rule, and so it just inherits the value
// that 'this' had before the 'scopeArrow' method was called. In this case, the
// 'scopeArrow' method was called from the global scope, where the value of 'this' is set
// to the global object by default, so 'this' retains the same value of referencing the
// global object.
