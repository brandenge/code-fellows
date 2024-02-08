# Context API - Behaviors

This is a further expansion on the React Context API.

## Hooks and Context

Sources:

- [Snackbars in React: An Exercise in Hooks and Context](https://medium.com/swlh/snackbars-in-react-an-exercise-in-hooks-and-context-299b43fd2a2b)

### With regard to the React Context API, what does a “provider” do?

It provides the context value. It broadcasts it to all of its children components. It is used as a wrapper around whichever part of the component hierarchy you want the scope of the context to start at (and cascade down from to all child components).

### With regard to the React Context API, how would we implement a “consumer” role?

There are 3 different ways, the first 2 are for class components, and the 3rd is for function components. Note that all 3 start with importing the context from its respective module.

1) After importing, use the context .Consumer component as a wrapper around whatever you want to have access to the context. In the middle of this wrapper, use an arrow function inside of JSX with the parameter which represents the context to give yourself access to the context inside the arrow function. The arrow function will return component(s) that have access to the context.

2) After importing, save the context to a static variable inside of the class. This will automatically give your class access to the context via this.context.

3) In a function component after importing, use the useContext hook, passing in the context as an argument, and saving its return value to a context variable that can then be used.

### Specifically with Context, how are we “wrapping” components to achieve our goals?

For the provider, it wraps a JSX expression of props.children. Then whatever it wraps is automatically included in that JSX expression. Then it has a value prop to pass in any context.
For the consumer, it wraps a JSX expression that either uses the context object directly, or an arrow function that exposes it as its parameter.

## React Context Links

Sources:

- [React v16.3.0: New lifecycles and context API](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

### Consume content from (at least) two more of the Awesome React Context links. After some familiarity with React Context, once again share your takeaways from each:

1) From "New Lifecycles and Context API" - Ref forwarding is a way for a component to take a ref that they receive from a parent component, and forward it onto a child component, thus passing it further down the component hierarchy. Also, future React features will be error boundaries and async rendering mode.

2) From "How to use React Context effectively" - You can call the context directly after importing it, like it is a function, instead of using the useContext hook.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Learning when and how to apply using the React Context API.

## Things I want to know more about
