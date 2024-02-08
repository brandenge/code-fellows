# Component Lifecycle / useEffect Hook

## Effects Hook

Source: [Using the Effect Hool](https://reactjs.org/docs/hooks-effect.html)

### What purpose does useEffect serve in a function component compared to its counterpart(s) in class components?

useEffect is the same thing as using the componentDidMount and componentDidUpdate lifecycle methods, combined. If it returns a function (for cleanup), then that is also roughly equivalent to the componentWillUnmount lifecycle method.

### When using the useEffect Hook:

### What does useEffect do?

It runs its provided function after every time that the component renders. If it returns a function, it will also run that returned function after the component unmounts, and also before each render (like the componentDidUpdate lifecycle method - used to clean up from the previous render). The returned function is for any needed "cleanup", such as unsubscribing from a service that was subscribed to in the original effect.

### Why is useEffect called inside a component?

To allow for props, state, and all other variables available to the component to be in scope and also available to the useEffect Hook.

This also makes use of closures to give it access to the variables that it needs access to. JavaScript already provides the feature that useEffect needs to function properly in the form of closures, so React makes use of closures in this way to avoid any further React-specific dependencies.

### Explain the importance of properly implementing effects with Cleanup

Without properly using cleanup for effects, you could create a memory leak, depending on what your effect is doing. If your effect is consuming more memory, the cleanup is needed to free that memory.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Being able to use the useEffect hook in practice, including the returned cleanup function, and the second paramater array of watchers for optimization.

## Things I want to know more about
