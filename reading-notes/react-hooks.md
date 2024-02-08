# React Hooks

This is a relevant topic because using hooks with functional components is the modern way to use React today.

## Introducing Hooks

### What was the motivation for introducing Hooks?

It solves various problems when trying to scale complex React applications with many components. In particular, there can be structural problems that arise with codebase that make it difficult to follow. One major example of this is that it is difficult to "reuse stateful logic between components" before hooks were available. Projects would have to change the hierarchy of their components to be able to reuse stateful logic between components, leading to a kind of "wrapper hell" with an overly complicated structure and layering of components.

### What changes are important regarding implementing Hooks versus Component Classes?

- Hooks cannot be used within class components. They can only be used inside function components.
- The use of hooks are completely optional. They are 100% backwards compatible, so using them won't break anything else.
- Hooks provide a more direct API to React features such as props, state, context, refs, and lifecycle.
- Hooks must be called from the top level of their function component. They cannot be called from inside a loop, conditional statement, or nested functions.

### Hooks allow you to reuse stateful logic without changing ___ _______.

the component hierarchy.

## Hooks API

### Name two rules imposed by React Hook usage.

1) Hooks can only be called from the top-level of a function component. They cannot be called from inside loops, conditions, or nested functions.
2) Hooks can only be called from React function components, or your own custom Hooks. They cannot be called from regular JavaScript functions, or React class components.

### How would you identify a custom Hook and why might you create one?

All Hooks (whether built-in Hooks or custom Hooks) must start with 'use' in their name. And a custom Hook is just a Hook that calls other Hooks. You would create a custom Hook if you want to reuse stateful logic between components - note that this is logic that uses state, not state itself. Every call to a Hook has its own state that is completely independent of every other call of a Hook, even the same custom Hook called multiple times in the same component.

## The State Hook

### What is a Hook?

Hooks are special functions in React that give you access to certain React features that would otherwise require creating a class component. They are called Hooks because they allow you to "hook" into these features, such as the React lifecycle, or using state.

### When would I use the useState Hook?

When you want to share state between components.

### If you were to add React state to a function component by declaring a state variable:

#### What does calling useState do?

1) It creates and returns an array that contains 2 elements: a state variable, and a function that can set the value of that state variable.
2) It takes an argument which is used to initialize the starting value of the state variable that it is creating and returning.

#### What do we pass to useState as an argument?

A value that is to be used to initialize the state variable. It can any value - whether a primitive or a compound data type.

#### What does useState return?

An array that contains 2 elements: a state variable, and a function that can set the value of that state variable.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Learn more about the other built-in React Hooks, such as useEffect.

## Things I want to know more about

Sources:

- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html#motivation)
- [Hooks API](https://reactjs.org/docs/hooks-overview.html)
- [The State Hook](https://reactjs.org/docs/hooks-state.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
