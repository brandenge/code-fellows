
# APIs

This topic matters as we are beginning to program both a front end and a back end, and interact with 3rd party APIs, we need to understand APIs for how each of these components will interface and interact with one another.

### What does REST stand for?

Representational State Transfer

### REST APIs are designed around a ____.

"REST APIs are designed around resources, which are any kind of object, data, or service that can be accessed by the client." - Microsoft docs

### What is an identifier of a resource? Give an example.

Any unique label that identifies that resource. For web resources, that is a uniform resource locator (URL), which is a subset of uniform resource identifiers (URI). Another example of a URI is the ISBN number that identifies a published book. The Dewey Decimal System that is used by many libraries to identify the location of books is another example. Mailing addresses could be another example as well to uniquely identify a physical location.

### What are the most common HTTP verbs?

GET, POST, PUT, PATCH, and DELETE.

### What should the URIs be based on?

The nouns that describe the resource. For example, 'orders', or 'customers'. This is in contrast to verbs, such as 'create-order' or 'delete-customer'. URIs should not be verbs, only nouns.

### Give an example of a good URI.

order, orders, customer, customers, book, books.

### What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?

If you fragment your resources into smaller, more specific buckets of data each identified by many URIs, then it will likely increase the number of requests that clients need to make to get all of the data that they need. This creates a "chatty" web API, and because each request is an expensive operation, it can create a slow API that cannot scale well.

### What status code does a successful GET request return?

200 if there was some content to return in the response. Otherwise, 204 for no content.

### What status code does an unsuccessful GET request return?

This could be any number of things. There are several ways that an unsucessful GET request could return. Namely, any 400 or 500 status code. But most commonly, it is a 404 for not found.

### What status code does a successful POST request return?

201 (created) if a new resource was created. Otherwise, 200 (ok) or 204 (no content) if nothing was created.

### What status code does a successful DELETE request return?

204

## Things I want to know more about

Source [Microsoft docs](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)
