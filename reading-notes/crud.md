# CRUD

This reading is relevant because we are working with front-end clients, back-end servers, and 3rd-party APIs that are all talking to each other with HTTP requests, using RESTful APIs, and HTTP status codes.

## Status Codes Based on REST Methods

Source: [Which HTTP Status Code To Use For Every CRUD App](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

### In your own words, describe what each group of status code represents:

100’s = informational codes - give you some kind of information to notify you of something, but do not actually perform any action
200’s = success codes - the client's request was accepted as valid by the server
300’s = redirection codes - the client's request had to be redirected to another URL for the requested resource. Can be either a temporary or permanent redirect.
400’s = client errors - the client made an invalid request. There is an error in how the client made their request to the server.
500’s = server errors - catch-all errors. The server had an error, but was also not able to confirm if the client's request was valid or not (hence why it is not a 400 error).

### What is a status code 202?

Accepted. Used for asynchronous operations, where completion of the operation won't happen until later. So this gives notification that it is a valid request that has been accepted for processing, while the client waits for the processing to finish. This will include a URL to either where the requested resource will be when it is finished processing, or where to get further information/updates about the status of the processing. It should also include a rough time estimate for how long the processing should take before it is finished.

### What is a status code 308?

A permanent redirect. This means that future requests by the client should be made to the URL redirect instead.

### What code would you use if an update didn’t return data to a client?

204 No Content usually. But other status codes might also be used, such as 200 OK, 201 Created, 202 Accepted, or 303 See Other. Use which ever one is more semantic/has more meaning, and makes more sense.

### What code would you use if a resource used to exist but no longer does?

410 Gone.

### What is the ‘Forbidden’ status code?

This means that even if the client is authorized, or does not need to be authorized, they still do not have permission to access the resource. This still publicly lets the client know that there is a resource there though. A 404 Not Found could also be used in similar situations where the client should not be notified that the resource even exists for security reasons.

## Building A REST API

Source: [Build A REST API With Node.js, Express, & MongoDB - Quick](https://www.youtube.com/watch?v=fgTGADljAeg&t=2s)

### Why do we need to pull our MongoDB database string out of our server and put it into our .env?

So that we are not putting it in our version control on GitHub. We need to keep it a secret.

### What is middleware?

Any code that executes in between two other software layers. This could be an entire program, or just a single small function.

### What does app.use(express.json()) do?

This allows express to use json when it is sending data.

### What does the /:id mean in a route?

This extracts the id query parameter from the client request and makes it immediately available in the request.params.id

### What is the difference between PUT and PATCH?

PUT will update and replace an entire existing resource. PATCH will update and replace only part of an existing resource.

### How do you make a default value in a schema?

Set the property and default value inside the data model that is defined by new mongoose.Schema.

### What does a 500 error status code mean?

This is a status code for a general internal server error. This is a catch-all for any server errors that could not be more specific in what the error was.

### What is the difference between a status 200 and a status 201?

A 200 status is for confirming that an operation is complete/successful for anything that did not create a new resource. For example, creating and sending back an access token to the client.

A 201 status is for when a new resource was successfully created, such as adding a new record to the database.

## Things I want to know more about
