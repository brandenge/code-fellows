# Event Driven Application

This is an important topic because event-driven design is a very common topic in object-oriented programming, and is a common design/programming paradigm in many modern applications. Event driven programming goes well with object-oriented programming in particular.

## Event Driven Programming

### What native Node.js module allows us to get started with Event Driven Programming?

EventEmmitter.

### What is the value of Object Oriented Programming used in tandem with Event Driven Programming?

We can use object methods that emit or listen to events separately without having to pass the object methods or callback functions around outside of the object. Borrowing a bunch of object methods outside of itself could lead to spaghetti could which is not as modular and difficult to maintain. This helps to maintain the encapsulation of the objects, and keep them decoupled. It may also keep things more asynchronous.

### Consider your knowledge of Event Driven Programming in the Web Browser, now explain to a non-technical friend how Event Driven Programming might be useful on the backend using Node.js.

If we have an application that has a lot of real-time functionality, it can get very complicated very fast trying to design the correct logic for what code needs to execute when, and without it conflicting with something else. With Event Driven Programming, we can simplify this paradigm by just having a single Event object that manages a bunch of different types of events, and then we just add types of events to it, along with event handlers, and then add event listeners to link an event handler to be executed whenever a type of event is triggered. In a sense, it is like creating a switchboard, a centralized location for receiving and sending event messages.

## Things I want to know more about
