
# Thinking in React and Higher Order Functions

The Thinking in React article is very relevant to the module because it is about how to approach building in React. I think this would have been very useful to read earlier in the module actually, like for class 2 even.

Source: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

The section on higher order functions is also relevant because React components act a lot like higher order functions as well, since components can return other components. Additionally, the interactivity between components also uses higher order functions as callback functions are passed around as event handlers, and other such use cases.

Source: [Higher Order Functions](https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK)

## Thinking in React

### What is the single responsibility principle and how does it apply to components?

The single responsibility principle stats that every object (whether a function, a class, or a React component) should have only one role. It can be stated in other ways too, such "should have only one reason to change" or "be responsible for one thing".

### What does it mean to build a ‘static’ version of your application?

Static means that it has no interactivity. Nothing changes dynamically at run-time.

### Once you have a static application, what do you need to add?

State and interactivity.

### What are the three questions you can ask to determine if something is state?

1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

### How can you identify where state needs to live?

I like to think of it as the lowest common ancestor that uses the state. But that is just a bare minimum, obviously if state is held below the common ancestor that uses it, then any components that need the state but aren't a child of that component won't be able to use it, and it simply won't work. However, there is also a reason to not just put all state at the highest component all the time, because it will pollute scope, and it will require passing the state through additional unnecessary layers in the component hierarchy, which adds complexity.

## Higher Order Functions

### What is a “higher-order function”?

A function that either takes another function as input, or returns another function as output, or both.

### Explore the greaterThan function as defined in the reading. In your own words, what is line 2 of this function doing?

Line 2 of the greaterThan function in the reading is returning an anonymous arrow function.

The call to greaterThan() assigns the parameter n in the function that it returns, so that function can be saved to a variable and then called again under the variable name. Calling the returned function using the variable name it was assigned to will assign the parameter m inside of the returned anonymous function.

This type of design to functions is sometimes useful when you need to create a bunch of functions all with very similar, but only slightly different logic to them.

Calling both functions at the same time using what looks like double-invoking parenthesis such as fn(a)(b) is called function currying.

### Explain how either map or reduce operates, with regards to higher-order functions.

map and reduce (and the other built-in array iterating methods) are higher order functions because they take a callback function as an argument. We can then think of these functions as being implemented with a traditional for-loop, where they call the callback function and pass in each element in the array as an argument to the callback function as it iterates through the array.

In the case of map, it creates a new array and returns it. In the case of reduce, it uses a variable that saves the returned value of the previous iteration through the array. This is very powerful and allows you to essentially replace any of the other built-in array iterating methods. This previous value variable can also be initialized to anything you want.

## Things I want to know more about
