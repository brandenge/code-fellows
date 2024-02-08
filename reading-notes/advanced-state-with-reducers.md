# Advanced State with Reducers

## useReducer Hook

Source: [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

### Name an alternative to the useState Hook.

The useReducer Hook.

### Why might the useReducer Hook be preferable to the useState Hook?

It allows you to manage complex state logic where the next state depends on the previous state, or deeply nested state values. It also allows you to optimize performance because the dispatch callback that it uses can trigger deep updates within nested components. This means that components that read from it do not need to rerender unless they also need the application state. And also it does not need to be passed through every nesting of components like traditional callback functions need to be via props. Passing a dispatch function automatically gives all nested child components access to it without having to explicitly forward it.

### What are two ways to set the initial state?

1) Pass the initial state as a second argument
2) Use lazy initialization by declaring an initializer function (called init) which is passed as a third argument to useReducer. The init function will take the initial state (second argument) as an argument, and it returns whatever the initial state should be. This allows extracting the logic for calculating the initial state to outside the reducer. It can also be used to reset the state.

## Ultimate Guide to useReducer

Source: [Ultimate Guide to useReducer](https://blog.logrocket.com/guide-to-react-usereducer-hook/)

### In terms of state, what does useReducer expect to receive as a parameter?

1) A reducer function
2) An initial state value
3) An initializer function (conventionally called init). This argument is optional, however.

### What does useReducer return?

The next state value, returned by the reducer function which performed the specific action argument that was passed to it.

### Explain dispatch to a non-technical recruiter.

Dispatch is a special function that is used to invoke the reducer function's specific action. It is treated differently than a typical callback function in that it does not need to be passed through every component level via props. I believe dispatch simply exists in the execution context for the entire component that it is declared in, giving all nested component levels access to it automatically.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Getting comfortable with using the useReducer Hook, including its dispatch method, and the initializer function.

## Things I want to know more about

Understand more about why the useReducer Hook is better at handling nested data than the useState Hook. We just learned that it is appropriated to use complex objects to store state in a single variable with useState, but now another article is advising that if you need to use a complex object for state, to use the useReducer Hook instead.

Why don't we have permission to call the reducer function directly (which forces us to use the dispatch method instead)?
