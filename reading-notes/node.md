# Node

Node is a very relevant topic because any back-end/server-side coding using JavaScript uses Node as its runtime environment (as a replacement for the web browser that JavaScript has usually run in historically).

### How would you describe Node to a non-technical friend?

Node is the environment that allows JavaScript code to be executed outside of the web browser.

### What does it mean that Node is a JavaScript runtime?

It means that it is a runtime environment. It is the environment that the JavaScript code executes in. It is built on top of Chrome's V8 engine, extending it with additional features that give it needed functionality outside of the browser, such as APIs for interfacing with the operating system.

### What is Node used for?

It is best suited for real-time interaction applications such as chat apps, or applications making heavy use of I/O, such as video streaming. It is good for scalability due to its asynchronous, event-driven nature. It is very efficicent with its single thread. But if more connections are needed to scale the application, it can be done very easily by simple cloning it on the same server.

Node is ill-suited for applications that may have significant I/O blocking calls, or CPU intensive operations that cannot be handed off to a worker thread.

## Things I want to know more about
