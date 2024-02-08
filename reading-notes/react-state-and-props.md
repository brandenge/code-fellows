# React State and Props

### Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?

render.

### What is the very first thing to happen in the lifecycle of React?

The constructor is invoked to create a new component.

### Put the following things in the order that they happen: componentDidMount, render, constructor, componentWillUnmount, React Updates

1) constructor
2) render
3) React Updates
4) componentDidMount
5) componentWillUnmount

### What does componentDidMount do?

It returns true or false, confirming whether a component did mount or not. This is useful for notifying other parts of the system if needed when a component is mounted.

### What types of things can you pass in the props?

Any valid data type in JavaScript. Numbers, strings, booleans, arrays, objects, etc.

### What is the big difference between props and state?

State is mutable and writable. Props are not. Props are immutable and read-only. State also only exists inside of its respective component, and props always come from outside a component.

### When do we re-render our application?

When a component's state is changed, or there is a change in the DOM.

### What are some examples of things that we could store in state?

1. Number of likes to a social media post, or any kind of counter for a component.
2. Form data
3. Any data that only belongs to the component that is is in.
