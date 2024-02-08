# Redux Additional Topics

This is a relevant discussion because it includes important topics such as Redux Toolkit, which is the more modern best practice way of using Redux, especially Redux middleware, and makes using Redux easier.

## Redux Toolkit (RTK)

### What concerns are addressed by Redux Toolkit?

1) "Configuring a Redux store is too complicated"
2) "I have to add a lot of packages to get Redux to do anything useful"
3) "Redux requires too much boilerplate code"

### What does configureStore() do?

It is a wrapper around Redux's createStore() function. It provides simpler configuration options and a more useful default configuration. It also does several things automatically for you, such as:

1) Automatically combine slice reducers (thus replacing the need for using Redux's combineReducer() function)
2) Automatically adds Redux middleware that you supply to it
3) Automatically includes the redux-thunk package by default
4) Automatically enables the use of the Redux DevTools Extension

### How would I use createSlice()?

It accepts an object of reducer functions and automatically creates action creator functions, action types, reducer functions, and the state that the reducer functions will change. In this case, each reducer function in the object only maps to a single action type. The slice reducer being created is what handles multiple action types. And multiple slice reducers are combined into the root reducer to configure the store.

The way the object of reducer functions works (I think) is that it takes the property names of the object, and creates action creator functions, action types, reducers, and state properties all with the same name.

Also note that reducers passed into createSlice can be written as if they are mutating state, without actually doing it by using a library called Immer.

"A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

Internally, it uses createAction and createReducer."

"createSlice will return an object that looks like:"

``` JavaScript
{
    name : string,
    reducer : ReducerFunction,
    actions : Record<string, ActionCreator>,
    caseReducers: Record<string, CaseReducer>.
    getInitialState: () => State
}
```

## MobX

### What is Mobx?

Another state management solution that is different from Redux.

### How does MobX make it “impossible” to produce an inconsistent state?

It ensures that everything that references application state in any way is always deriving from state as the single source of truth, and that it does so automatically.

"Make sure that everything that can be derived from the application state, will be derived. Automatically."

### How would we build a reactive user interface?

In the constructor of a class, call the makeObservable function and pass it `this` as the first argument, and an object with all of its properties and methods names as keys whose values are either `observable`, `computed`, or `action`.

1) observable - is for state that can change.
2) computed - is for anything that reads from state, and it allows it to make use of state directly or a cache if their underlying state has not changed.
3) action - is for any method that writes to state.

For a React application, wrap functional components with the `observer()` function call. This wraps the React component in a higher order component (HoC) that keeps the component in sync with state by wrapping it in `autorun`.

## Tutorial

### What take-away(s) did this tutorial provide?

How to use the createApi function from RTK Query to more easily fetch data from API end points. It can be used to define a set of endpoints for an entire API in one place. After setup, RTK Query allows you to do API requests with simple function calls, which return an object that consists of data, error, and utility boolean values, such as an isLoading property.

Also, just more general awareness of the problem of complex state management in general, with UI components getting out of sync with state, unless using a proper state management tool such as Redux or Mobx to solve it.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Just to get more comfortable with putting all these pieces and concepts together into practice. The class README is simple enough on it own otherwise.

## Things I want to know more about

Sources:

- [Redux Toolkit (RTK)](https://redux-toolkit.js.org/introduction/getting-started)
- [MobX](https://mobx.js.org/getting-started.html)
- [Redux Toolkit Tutorial](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)
- [Redux Toolkit (RTK) Homepage](https://redux-toolkit.js.org/)
- [HookState](https://hookstate.js.org/)
