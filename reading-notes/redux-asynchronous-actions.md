# Redux - Asynchronous Actions

## Async Actions

Source: [Redux Async Actions](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)

### Why use Redux middleware?

Because Redux reducers must be pure functions (i.e. be deterministic, have no side effects, and not rely on external state such as global variables), any logic that is not pure must be done in a separate function outside of the Redux reducers. This most common example of this is doing an asynchronous operation, such as making an API call. Async logic, or other such non-pure logic such as this must be done in the Redux middleware, which will execute the non-pure function first before calling the reducer function, hence it occurs in the middle, right before the reducer is called. The Redux middleware is then what dispatches the action, after the async or non-pure logic has occurred.

### Consider the Redux Async Data Flow Diagram. Describe the flow in your own words.

1) A stateful component in the UI is updated by the user.
2) The event handler that handles the user's interaction with that component is called (such as a click event handler).
3) That event handler calls dispatch, passing in either a function or an action object as an argument.
4) Because the middleware has been applied, the middleware gets called first before the reducer is called.
5) The middleware will first check if the argument provided to it is a function instead of an action object.
6) If the argument is a function, the middleware will execute its asnychronous (or non-pure) logic. Otherwise, it skips the middleware and goes to the next action (via the next(action) call).
7) The middleware makes its API request (or other asynchronous or non-pure logic) and returns a response.
8) The middleware creates the action object based on the data received in the API response (or return value of some other asynchronous or non-pure logic).
9) The middleware calls dispatch with the action object is has created.
10) The reducer is finally called like normal, which both retrieves the prior state, and updates to the new state.
11) The UI is updated with the new state.

### How are we accommodating async in our Redux app?

By using Redux middleware functions which will contains the async logic outside of the reducers. This keeps the Redux reducers pure.

## Thunk Middleware

Source: [Thunk Middleware](https://github.com/reduxjs/redux-thunk)

### Why would you need redux-thunk middleware?

You can create your own Redux middleware function to be able to do asynchronous operations that interact with the Redux store without Thunk. But Thunk basically provides these functions pre-built for you.

"With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store."

### Redux Thunk middleware allows you to write action creators that return a ____ instead of an action.

"Redux Thunk middleware allows you to write action creators that return a function instead of an action."

### Describe how any return value from the inner thunk function will be made available.

By using function composition with an action creator/generator function that returns another function (which is the "thunk"). For example - `dispatch(actionCreator(arg))`. In this example, `actionCreator(arg)` returns another function. And that function being returned takes a dispatch parameter, which is the dispatch method itself, making dispatch available to be called from the inner function. So dispatch is being called on the outside with the actionCreator() as an argument, and then also again from inside the inner "Thunk" function that is returned by the call to actionCreator(). Also, because the argument being passed the middleware will intercept it (using its conditional logic that checks if its action parameter is a function), and that lets it know to execute its async logic.

"Any return value from the inner function will be available as the return value of dispatch itself. This is convenient for orchestrating an asynchronous control flow with thunk action creators dispatching each other and returning Promises to wait for each other’s completion"

"When this function is passed to `dispatch`, the thunk middleware will intercept it, and call it with `dispatch` and `getState` as arguments."

When an action creator/generator returns a function instead of an action object, that function being returned is the "thunk".

## Reflection

### What are your learning goals after reading and reviewing the class README?

Just getting more comfortable with all the syntax and code structure of using Redux middleware, Thunk, and Redux toolkit more generally.

## Things I want to know more about

### What are enhancer functions in Redux?

This is just the name of the function that is returned by applyMiddleware(), which is the Redux built-in function that applies the middleware to Redux. This enhancer function is the second argument (which is optional) to the createStore() function (after the rootReducer argument).

Note that the applyMiddleware() is part of Redux, but only needed for Redux Thunk if not using the Redux toolkit (the same for using the connect() function, which is more part React Redux, but only needed if not using Redux toolkit). Otherwise, the configureStore() function from Redux toolkit will apply Thunk middleware automatically.

### In the "Saving ToDo Items" section of the Redux docs on Async Actions, why do we not have access to the text of the new ToDo item being saved? Why is this not just part of the action payload, just like anything else? How is this different where wrapping the middleware function with another synchronous function that accepts a text parameter is necessary?

This is part of the "action creator" or "action generator" pattern, whereby you write a function that returns the action object. But it is still not clear to me why we have to use the action creator pattern here and are unable to do it by dispatching the action object directly, just like normal.

### How do you break down a store into multiple sub-stores and why would you want to do this? Is this similar to, or correlated with using multiple different root reducer functions with combineReducer() ?



### How does injecting a custom argument into configureStore() work?

The Redux Thunk repo's readme file state that it is useful for swapping out an API service layer for a mock service in tests. But I do not fully understand this.

### What does "the return value of dispatch" mean?

I thought dispatch just sent an action object which triggers the store to call the root reducer to update its state.
