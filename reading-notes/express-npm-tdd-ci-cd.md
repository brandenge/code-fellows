# Express, NPM, TDD, CI/CD

These topics are relevant because they are either core technologies (Express and NPM) that we will be using throughout the course, or they are important best practices in modern software development today (TDD and CI/CD).

## Node and Express

Source: [MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

### Explain middleware, answer as though I were a non-technical recruiter.

Middleware is just any code that executes in-between when a request is received, and it hits a route to start generating a response. The code can come from anywhere, it could be a function that the developer writes themselves, or it could come from a library.

### Express the most popular __ __ ____.

Express is the most popular Node web framework.

### Express is “unopinionated.” What does that mean?

It means that it doesn't have many rules about how you should use it. For example, other web frameworks may have a bunch of conventions for how you name things, how your structure your application's directories, what other libraries you are allowed to use with it, or how you must write your code when using it or interfacing with it.

### What is a module and why is modularity useful to us as developers?

Modularity is an important software development principle. It provides many benefits, such as increasing the maintainability and cohesion of the code. It helps create a separation of concerns, which decouples code from other modules. This creates boundaries and limits on the categories of bugs and complexity that can be created from a growing codebase over time, because the modules are a relatively self-contained unit of code themselves.

Modularity becomes increasingly important the greater the size and complexity of the codebase. Without modularity, there would be a soft limit to the size and complexity of codebases as they would begin to turn into spaghetti code, and become unmaintainable, falling under the weight of their own unmanaged and out of control complexity.

## NPM

Source: [NPM Docs](https://docs.npmjs.com/about-npm)

### What version of npm are you running on your machine?

8.19.1

### What command would you type to install a library/package called ‘jshint’ into your node project?

npm i jshint

## TDD

Source: [Agile Alliance](https://www.agilealliance.org/glossary/tdd/)

### Explain why tests are important. Please explain as though I were your non technical elder.

Software is constantly changing, but everytime you change it you would need to check that nothing else broke from the changes. These checks have to either be done manually, or such checks get neglected and bugs and technical debt start to mount over time. Both of these outcomes are very expensive. Tests just automates these checks, making the computer do the checking. Over the course of a project, such automated tests could be run many thousands of times, with each small change being made. This ends up saving more time than was spent writing and maintaining the tests in the first place, if the lifespan of the project is sufficiently long.

### What are three expected benefits of testing

1) Reduction of bugs
2) Saved time by automating checks that would have to be done manually otherwise.
3) Improved design quality, such as reduced coupling and increased cohesion.

### Name at lest 2 individual pitfalls and at least 2 team pitfalls commonly encountered while writing tests.

Individual pitfalls:
1) Forgetting to run the tests frequently
2) Writing too many tests
3) Writing tests that are not specific enough
4) Writing overly trivial tests
5) Writing tests for trivial code

Team pitfalls:
1) Partial team adoption
2) Poor maintenance of the test suite
3) Abandonment of the test suite or lack of use of the test suite

## CI/CD

Source: [GitHub Training & Guides](https://www.youtube.com/watch?v=xSv_m3KhUO8)

### What are three benefits of Continuous Integration?

1) Increased development velocity
2) Reduced merge conflicts, ensuring everyone's changes will integrate
3) Helps to catch bugs, because we have a finer-grain series of snap-shots of the code base that allows to quickly narrow down which code caused the bug.
4) Have confidence that your software is working

### What is the difference between Continuos Delivery and Continuous Deployment?

Continuous deployment refers to deploying onto a server. That deployment could be production, or staging/develeopment, or anything else. Continuous delivery specifically refers to released software to the end-user, so it is only referring to production environments.

### Explain how GitHub fits into this process assuming the listener comes from a non-technical background

GitHub is a shared repository that tracks all changes to the repository. It can then use webhooks to send event-based messages to other 3rd-party systems to notify them when a change or any particular event has occurred to the repository, which could then trigger an automated pipeline, such as automated testing and deployment with every pull request.

## Things I want to know more about

