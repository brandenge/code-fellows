# Component Based UI

This topic is relevant because component based UI is the fundamental concept underlying the entire purpose of React. And React is currently the most popular front end framework.

Sources:

- [React Hello World](https://facebook.github.io/react/docs/hello-world.html)
- [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
- [Rendering Elements](https://facebook.github.io/react/docs/rendering-elements.html)

## React Components

### What are the building blocks of a React app?

Elements and components.

### What is the difference between an element and a React component?

- Elements are the smallest and simplest building blocks in React apps (like atomic elements - they are indivisible and immutable). React elements are direct JavaScript object representations of browser DOM elements.
- Components are the higher-order abstractions of elements. Components are made of elements. Components can consist of multiple elements, and of multiple other components.
- Elements are immutable. Components are mutable.
- React elements are produced by JSX. React components are produced by React functions or classes.

### What are some advantages of React’s component based architecture?

- Performance - it allows you to re-render only individual components that make up a web page, rather than the entire thing. This increases the performance of the browser's ability to render such web pages by significantly reducing its workload.
- Modularity and maintainability - components map more intuitively and directly to the user interface, making them easier to reason about. They are more semantically named. They provide better encapsulation, and organization of the code.

## Introducing JSX

### What is JSX and why do we use it?

It is a syntax extension to JavaScript. It is used to be able to describe what the UI should look like within JavaScript. It essentially allows you to write HTML elements within JavaScript instead of a separate HTML file. "JSX is actually JavaScript but it looks like markup."

Source: [Code Fellows JavaScript 401 Class 26](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-26)

### Describe the process of embedding JavaScript expressions in JSX

JavaScript expressions can be embedded inside of JSX by wrapping it in curly braces.

### Is it safe to embed user input in JSX? Explain

Yes. All JSX gets escaped and converted into a string, so there can be no injection attacks from user input.

## Rendering Elements

### Explain what a React Component is to a non-technical friend

A React Component represents a piece of the user interface of a web page of a React application.

### Describe mutability and React Components, specifically, how is the UI updated?

React Components are mutable. They can have state. The UI is updated by only changing the exact React elements needed to bring the web page to the desired state. React elements are immutable, so the content inside the React elements is not what is changing. Rather, it is that the exact set and hierarchy of React elements is what gets changed. So even if a component contains multiple elements and that component's state changes, which causes it to be re-rendered, if that only affects 1 element within it, then only that 1 element gets re-rendered. Any unaffected elements within a component being re-rendered do not get re-rendered.

### If changes are made to the UI, what does React update?

Only the React elements that were changed.

## Additional Questions

### Looking ahead at this module’s course schedule, What do you look forward to learning?

Hooks and reducers / Redux.

### What are your learning goals after reading and reviewing the class README?

I didn't see any new content particularly for this class, but I just want to make sure I am still feeling solid with React after not having touched it for a month.

Additional Sources:

- [SASS Cheatsheet](https://devhints.io/sass)
- [React Cheatsheet](https://devhints.io/react)
- [Another React Cheatsheet](https://reactcheatsheet.com/)

## Things I want to know more about
