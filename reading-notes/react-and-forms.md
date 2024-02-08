# React and Forms

## React Docs - Forms

### What is a ‘Controlled Component’?

It a class component that holds state and also sets the "value" property within its state object for the purposes of allowing other components to also track any updates to the value attribute of an input element. Any changes to the input can be tracked in the state object, and then other components can see that state.

### Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

Update the state with their responses as soon as they enter them. This way you can give the user feedback as they type so they don't have to wait until they submit to get feedback/errors.

### How do we target what the user is entering if we have an event handler on an input field?

In the event handler, use event.target.value, and set the function to accept an 'event' parameter, which will be the event object.

## The Ternary Operator Explained

### Why would we use a ternary operator?

1. If you want to shorten your if/else statement into a single line of code.
2. If your want your if/else statement to return a value, so that it can be saved to variable or returned from a function, for example.

### Rewrite the following statement using a ternary statement:

```
if(x===y){
  console.log(true);
} else {
  console.log(false);
}
```

Rewrite:
```
console.log(x === y ? true : false);
```

## Things I want to know more about
