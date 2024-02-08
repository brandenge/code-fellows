# Functional Programming

Functional programming is a relevant topic because it is an important programming paradigm to understand today. It helps to manage complexity and state. Although it is rare and often impractical to program in a purely functional style, it is still important to blend functional programming concepts in with other programming paradigms, such as OOP.

## Functional Programming Concepts

Source: [Medium article](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)

### What is functional programming?

Functional programming is a programming paradigm that primarily revolves around the use of pure functions. This is in contrast with object oriented programming for example, which is more about the use of objects, classes that provide the templates for those objects, messaging/interfaces between objects, and inheritance that defines a hierarchical relationship between classes. Functional programming can replace all of those features of object oriented programming by just using functions.

### What is a pure function and how do we know if something is a pure function?

A pure function has 2 properties:

1) It always gives the same output when given the same input.
2) It has no side effects. This means no mutating any memory outside of the scope of the function, such as heap memory. All work is done within the execution context of the function on stack memory.

### What are the benefits of a pure function?

It makes it easier to manage state and complexity, which makes it easier to debug and extend and modify the code. For example, by moving the side-effects of a function into separate impure functions, to preserve as much of a function to be pure as possible, you isolate the area in the code base where a whole class of bugs related to side effects can come from. Keeping the number of different possible permutations of state in your program to be as small as possible is a critical factor for managing complexity.

### What is immutability?

Immutability means an object/value cannot be changed directly. If an immutable value saved to a variable, then you can only replace that value with another value, i.e. change the location in memory that the variable is pointing to. You cannot have that variable point to the same location in memory and change part of that value.

For example, in most modern programming languages, composite data types (such as arrays and objects) are mutable, while primitive data types are immutable. Strings are a data type that is more mixed. For example, in Ruby, strings are mutable. This means that you can take the index of a string and not only read it, but also write to it, and change it in-place.

### What is Referential transparency?

This means being able to replace an expression that has a given input, with its corresponding output without any change in the behavior of the program. Therefore, referential transparency requires the use of pure functions. The opposite of referential transparency is referential opacity.

## Modules and Require

Source: [YouTube video](https://www.youtube.com/watch?v=xHLd36QoS4k)

### What is a module?

A file.

### What does the word ‘require’ do?

It reads from the exports object which is part of the module management system that Node.js uses.

### How do we bring another module into the file the we are working in?

You assign the function names or variables that you want to be able to import in by assigning them to a property within the module.exports object. Then you import them into another file by using require(), passing in the name of the file, and saving it to a variable. This will give you access to the module.exports object for that file, which will include everything that was exported from it.

### What do we have to do to make a module available?

You assign the function names or variables that you want to be able to import in by assigning them to a property within the module.exports object.

## Things I want to know more about
