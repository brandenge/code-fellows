# Redux - Combined Reducers

This topic explores the combinedReducers function, which is a core function provided by Redux.

## Multiple Reducers

### Why create multiple reducers?

To modularize and organize complicated state logic for better scalability, extensibility, testability, and maintainability.

### How would you combine multiple reducers?

1) Import the combineReducers function from Redux.
2) Call the combineReducer() function. It takes an argument which is an object with properties that are the same named properties as the state object in the store, and the values are the names of reducer functions that are responsible for changing the values of those properties.
3) Save the return value of combineReducer() (which is a reducer function) to a variable.
4) Pass in the newly created reducer function returned from combineReducer as the first argument to the createStore() function call.

### How will you manage state as an immutable object? why?

Use the spread operator, or any other non-destructive operator to create a new copy of the state object, and return that copy from the reducer functions. This must be done because the first principle of Redux is that state is read-only. You cannot write directly to state.

Dispatching the action will cause the store to call all the reducers with the action as an argument to identify what state needs to change.

## Redux Docs - Using Combined Reducers

### combineReducers is a utility function to simplify the most common use case when writing ___ _____ .

Redux reducers.

### Explain how combineReducers assembles the new state tree.

It calls each slice reducer function that was in the object passed into it as an argument, with the current state, and the action that was provided in the dispatch function call. This gives each slice reducer an opportunity to handle the state, if it has a case that handles the action type.

### How would you define initial state in an app using combineReducers?

Use combineReducers to create a root reducer, and then in that root reducer, have it return an initial state value when the state argument is undefined.

## Redux Docs - Combined Reducer Syntax

### Why will you want to split your reducing functions as your app becomes more complex?

To modularize and organize complicated state logic for better scalability, extensibility, testability, and maintainability.

### The _____ helper function turns an object whose values are different reducing functions into a single reducing function you can pass to ____.

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

### What is a popular convention when naming reducers?

Naming the reducers the same as the state property that they update so that you can use object literal shorthand syntax in the object passed as an argument to the combineReducer function.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Just to continue reinforcing my general knowledge of Redux and how all of its pieces fit together.

## Things I want to know more about

Sources:

- [Multiple Reducers Example](https://www.youtube.com/watch?v=gBER4Or86hE)
- [Redux Docs: Using Combined Reducers](https://redux.js.org/recipes/structuring-reducers/using-combinereducers/)
- [Redux Docs: Combined Reducer Syntax](https://redux.js.org/api/combinereducers/)
