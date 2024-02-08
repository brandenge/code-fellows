# Express REST API

This topic is relevant as we begin to learn how to build our own APIs with Express.

## Review: ES6 Classes

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Classes are a template for creating ____.

Classes are a template for creating **objects**.

### Can a class declaration be hoisted?

Not in practice, no. Technically, it is hoisted, but its values are not initialized, making them still unusable.

### How would you describe a constructor and contextual “this” to a non-technical friend?

A constructor is a template for creating objects. It is like a machine in a factory that creates an object from a template.

## Using Express Routing

Source: [Express docs](https://expressjs.com/en/guide/routing.html)

### Within Express, what does routing refer to?

It refers to the flow of control that a network request takes through a back-end application's endpoints. This flow ends up creating the logic that determines how a back-end server creates its responses to each type of request.

### What is the difference between a route path and a route method?

Route methods are the types of HTTP methods that the request to a particular route can accept. This also includes methods that accept all HTTP methods, such as `app.use()` and `app.all()`.

Route paths are the part of the URL that a request is being made to that comes after the domain and port (if applicable). These help to further define what type of request is being made. Note that query strings in the URL are not part of the route path. However route parameters are part of the route path. Route paths can also use regular expressions.

Routes/endpoints are defined by the combination of route methods and route paths together.

### When is it appropriate to add next as a parameter to a route handler and what must you do if next has been passed to your middleware as a parameter?

You should provide next as a parameter and call it within the body of the callback when there are multiple callback functions that could run as part of the route. This will hand off control to the next callback (i.e. the next middleware, etc.) if there is one. Otherwise, the server will drop the request and not send a responses back.

## Express Routing

Source: [Digital Ocean](https://www.digitalocean.com/community/tutorials/learn-to-use-the-new-router-in-expressjs-4)

### What is an Express Router?

It is like an extension of Express, which provides all the route methods and other routing APIs, such as `.use`, `.get`, `.param`, and `route`.

### By what mean do we initialize express.Router() in an express server?

By requiring Express, and then calling .Router() on the instance of express that has been created.

For example:

```JavaScript
const express = require('express');
const router = express.Router();
```

### What do we use route middleware for?

To process a request in some way before a response is processed and sent back. For example, checking if a user is authenticated, data validation, logging for analytics, or anything else before the response is formed and sent back to the client.

## Things I want to know more about
