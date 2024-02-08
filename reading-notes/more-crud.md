# More CRUD

Sources:

[Medium Article - Avelon Pang](https://medium.com/geekculture/crud-operations-explained-2a44096e9c88)

[Coding Garden YouTube channel](https://www.youtube.com/watch?v=EzNcBhSv1Wo)

This reading is relevant because we are working with networking requests/responses that perform CRUD operations using an API.

### Which HTTP method would you use to update a record through an API?

PUT.

### Which REST methods require an ID parameter?

PUT, PATCH, and DELETE.

### What’s the relationship between REST and CRUD?

REST defines a protocol and standardizes a set of methods for APIs to implement CRUD database operations, which are the 4 basic database operations of create, read, update, and delete. REST commonly uses HTTP, but it does not need to use HTTP.

### If you had to describe the process of creating a RESTful API in 5 steps, what would they be?

1. Set up a back-end server. For example, using Node.js and Express.js.
2. Set up a route that uses the POST method to create a new resource.
3. Set up a route that uses the GET method to read an existing resource.
4. Set up a route that uses the PUT method (and possibly also PATCH) methods to update an existing resource (in whole, or in part, respsectively).
5. Set up a route that uses the DELETE method to remove an existing resource.

## Things I want to know more about
