# Passing Functions As Props

## Lists and Keys

### What does .map() return?

An array. If each iteration returns a React component, then it will return an array of React components.

### If I want to loop through an array and display each value in JSX, how do I do that in React?

Call .map with the array being the calling object. Then inside the callback function used with .map (which will be called on every element in the array), wrap each element in JSX. This will then return an array HTML elements or React components. Lastly, wrap the returned array of HTML elements or React components with a single ancestor element or component, and ensure that it will be rendered properly somewhere higher up the chain.

### Each list item needs a unique ____.

Key. The key property.

### What is the purpose of a key?

To help React maintain the proper ordering of arrays of components. Components must stay in the same order or else React will trigger a re-rendering because it will think something has changed.


## The Spread Operator

### What is the spread operator?

It is an operator that expands an iterable object, such as an array, an object, or even a string.

### List 4 things that the spread operator can do.

1. Expand the elements of an array.
2. Expand the characters of a string.
3. Expand the properties of an object.
4. Enumerates only over the array indexes or property names that does not come after it.

### Give an example of using the spread operator to combine two arrays.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

### Give an example of using the spread operator to add a new item to an array.

let arr = [1, 2, 3];
let newArr = [...arr, 4];

### Give an example of using the spread operator to combine two objects into one.

const obj1 = { a: 1, b: 2, c: 3};
const obj2 = { d: 4, e: 5, f: 6};
const combinedObj = {...obj1, ...obj2};
console.log(combinedObj);

## How to Pass Functions Between Components

### In the video, what is the first step that the developer does to pass functions between components?

Define the function that is to be passed down.

### In your own words, what does the increment function do?

The increment function on the class component actually holding the state is just meant to update the state of the component. The increment function on the receiving component is only intended to identify which component was clicked on, and then call the callback function that was passed in to update the state of the component that holds that state. And it also passes in the name of the component that was clicked on as an argument to that function, so that the ancestor component holding state can update the state correctly. 

### How can you pass a method from a parent component into a child component?

Pass it as a property. The child component will then have access to it via the props object.

### How does the child component invoke a method that was passed to it from a parent component?

By accessing the property it was saved to within the props object, such as this.props.parentMethod().


## Things I want to know more about
