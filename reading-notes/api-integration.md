# API Integration

This subject is relevant because understanding how to use and also develop APIs is a core skill for web programming.

## API Server Build

Source: [Review API Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/api-server/)

### Explain the different between a query string parameter and a path parameter.

A query string parameter is just a piece of data in the form of a key-value pair that is passed in through the URL. The syntax is a ? to start the query strings, = in between each key and value, and & in between each pair.

A path parameter is just a dynamic value that is part of the path URL. For example, the id of a resource.

### What would our API URL with a path id parameter be given the following information:

1) Domain: http://our-site.com
2) v3
3) model name: stuff
4) id: things

http://our-site.com/api/v3/stuff/things

### We have created a dynamic API with an “interface”. Describe how that interface works to a non-technical friend.

The interface is a higher level abstraction of each type of data set (called a model). For example, the database might have data for products, and also categories. We want a single interface for both of these, so that every time we create a new type of data, we don't need to write a bunch more code and make a bunch of code changes every time. This simplifies the code base and keeps it much more maintainable.

## API Auth Server Build

Source: [Review Auth Server Build](https://codefellows.github.io/code-401-javascript-guide/curriculum/apps-and-libraries/auth-server/)

### Describe how you would use middleware to implement basic and bearer auth.

For each respective route that requires authentication or authorization, middleware containing the logic for such authentication and authorization will be added to the route. So for example, the API route for signing in will have the middleware for basic authentication. Then all other routes that require authorization will have a bearer auth middleware, and also a capabilities middleware to handle the permissions logic (i.e. role-based access control).

### Describe the handshake necessary to implement OAuth.

The user makes a request to their respective OAuth provider (such as Google or GitHub). The OAuth provider then gives the user a token. The user then gives their OAuth token to the application that they want to be logged in with. That application then gives the token that was provided to them by the user to the OAuth provider, thus confirming that the application has been authorized by the user properly to be able to use their OAuth credentials to log in.

### Describe how Role Based Access Control works to a non-technical friend.

In the old days of IT departments of big organizations, they used to assign computer system privileges individually to each user. This would not scale well, as it would require very frequent changes whenever an employee was hired, left, was promoted, or had any kind of change in their job function. It would also lead to a lot of computer system prvileges getting very loose over time, thus reducing security. Role Based Access Control (RBAC) fixes this dynamic by having an intermediary layer between users and their privileges called roles. Roles are basically standard templates or collections of prvileges. And this makes it much easier for IT departments to manage the security of large organizations.

## Reflection

### What are your learning goals after reading and reviewing the class README?

To be able to implement AuthO, basic auth, bearer auth, and RBAC.

## Things I want to know more about
