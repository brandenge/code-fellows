# Context API

## React Context

Source: [Context - React Docs](https://reactjs.org/docs/context.html#classcontexttype)

### What can React Context provide your app?

React Context is an advanced feature of React that allows the ability to avoid the need to thread props through multiple nested components, or to multiple sibling components. It essentially broadcasts the execution context to all child components, much like giving a scope to components.

### Why might we use Context?

- If you don't want to have to thread some props data through many different nesting levels.
- If you want to make some data available to multiple different sibling components.
- If you want to make some data available to components at multiple different nesting levels.
- If you want to make some data global in scope to either an entire React application, or some subtree of components within a React application, for any reason.

### Why should we use it sparingly?

- It makes component reuse more difficult.
- Much like variable scope, it can pollute the context of components. Every child component will have access to the context, even those that do not need it.
- It can create name collisions of context objects of the same context type from the same context provider at different nesting levels. Innermost context overrider outer contexts.
- Juggling multiple different contexts can often create more complexity.

## Awesome React Context Links

Sources:

- [Awesome React Context](https://github.com/diegohaz/awesome-react-context)
- [Egghead](https://egghead.io/lessons/react-creating-providers-and-consumers-with-the-react-context-api)
- [Wes Bos](https://www.youtube.com/watch?v=XLJN4JfniH4)
- [Harry Wolff](https://www.youtube.com/watch?v=9Ilq6G-VMyQ)
- [Manorisms](https://www.youtube.com/watch?v=WhWqy-vxKS8)

### Consume content from (at least) two of the Awesome React Context links. Share your take-away from each:

1) Egghead video - The default value added as an argument to createContext is only used if a consumer of that context is used somewhere where there is no provider. It does not allow the provider to not provide a value. If there is a provider, it must still provide a value.

2) Wes Bos video - Use {this.props.children} as the child of the context provider component in its definition so that it can wrap any component to provide its context.

3) Manorisms video - Other React features we have not covered yet are render props, and various refs (string refs, object refs, callback refs, and forward refs).

## Additional Questions

### Looking ahead at this module’s course schedule, What do you look forward to learning?

Probably the API integration and Auth server.

### What are your learning goals after reading and reviewing the class README?

Being able to know when and how to apply the React context API.

## Things I want to know more about
