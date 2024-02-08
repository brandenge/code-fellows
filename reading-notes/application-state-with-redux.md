# Application State with Redux

## Dan Abramov Redux Tutorials

### What is the first principle of Redux?

1) Store - "Represent the whole state of the entire application in a single JavaScript object." This object is called the "state" or "state tree".

2) Action (dispatch) - "The state tree is redundant. You cannot modify or write to it. Instead, anytime you want to change the state, you need to dispatch an action." This action is also an object that contains data and a type property.

3) Reducer (change state) - "To describe state mutations, you have write a function that takes the previous state of the app, the action being dispatched, and returns the next state of the app, and this function has to be pure. This function is called the reducer."

### What is a store and what do we use our reducers for within that store?

"The store holds the current application state object and lets you dispatch actions." Reducers are what update the state in the store. They return the new state. So when you instantiate the store object, you must specify which reducer is to be used to update it.

### Name three Redux store methods given to us by createStore and describe their use.

1) getState() - "retrieves the current state of the Redux store."

2) dispatch() - "lets you dispatch actions to change the state of your application)."

3) subscribe() - "lets you register a callback that the Redux store will call anytime an action has been dispatched, so that you can update the UI of your application to reflect the current application state." It also returns a function for unsubscribing from the event listener by filtering it from the array of event listeners.

### Explain to a non-technical recruiter what combineReducers() does and why it is useful.

Non-technical explanation - combineReducers() essentially collects all of the reducer functions into a single object, assigning each field of data its own reducer function. This provides a clean organization of all the needed reducer functions as an application grows to have many data fields and complicated logic for updating the data.

Technical explanation - A Redux-provided high-order reducer function whose only job is to combine the state logic of all of the reducer functions of a Redux application. It takes an object as an argument whos properties are state field names, and the values are the respective reducers that manage each state field name. In other words, it says which property in the state object gets updated by which reducer function.

## Additional Questions

### Looking ahead at this module’s course schedule, What do you look forward to learning?

Just a deeper understanding of Redux, how it works, and why it works the way it does.

### What are your learning goals after reading and reviewing the class README?

1) Understand further why we don't want to modify state directly.
2) Understand why the dispatch method is used to indirectly call reducer functions, rather than calling reducer functions directly.
3) Understand what Redux middleware is.
4) Understand why Redux still uses the props object instead of just calling store.getState() whenever it needs access to stateful data.

## Things I want to know more about

### What other functions are provided by Redux?

1) combineReducers()
2) createStore()

### Does Redux have built-in protections against direct mutations of the state object, or must developers enforce/avoid/prevent mutations themselves (such as by using a deepFreeze method)?

Yes Redux does prevent this, and it does so by throwing errors.

### What is the benefit of not modifying state directly?

It preserves snapshots of state for the purposes of better logging, easier debugging, better testability, and enabling a variety of advanced application features, such as hot reloading (seeing state changes without reloading the entire application), time travel (going back to a prior saved state, or mimicking a future state), and the use of new dev tools. It also allows you to decouple what state changed from how it changed, or presentation components (like the view in MVC architecture) from behaviors (like the controller in MVC).

### What is the benefit of dispatching actions to reducer functions (using the dispatch method), instead of just calling the reducer function directly? Is this like a functional programming technique?

Dispatch methods use an action object. This pattern of using an action object leaves a data trail of all changes to state. Otherwise it would just be a bunch of function calls that are more difficult to log and preserve what was called and in what order. This is what allows you to create snapshots of state, and more easily implement other more advance features using state.

Also note that you cannot call reducer functions directly. If you were to do that, it would not do anything. They would not update the state object in the store, because the reducer must be called by the store directly in order for it to update state properly. And the only way to get the store to make the call to the reducer, is by using the dispatch method, with an action object.

### Why does Redux need to use the props object if it is using the Context API? Why do we still want to pass state through props when using Redux instead of using it like a Context API?

This provides a kind of scope to the state for each component, so that each component only has scope/access to the state and dispatch actions that it needs. This is done using the connect method from the react-redux library, which takes a mapStateToProps and mapDispatchToProps object, to connect them to the component. This is similar to declaring state in the component the normal React way, without Redux.

Without using them through props like this, if you just call store.getState() to get the whole state object in the store wherever you want for any component, then any change of state will force a re-render of the entire application, instead of only just the component that that state is being used by. This would obviously crush performance of an application.

### What is Redux middleware?

This is for performing asyncronous operations with state, such as fetching/API calls. For example, using the thunk library.

### How do you break down a store into multiple sub-stores? And why would you want to do this?

Sources:

- [Dan Abramov Redux Tutorials](https://egghead.io/courses/getting-started-with-redux)
- [World's Easiest Guide to Redux](https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6)
- [Testing Reducers](https://medium.com/@netxm/testing-redux-reducers-with-jest-6653abbfe3e1)
- [Redux Docs](https://redux.js.org/)
