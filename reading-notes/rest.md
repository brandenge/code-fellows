# REST

REST is relevant because we are starting to work with network requests and 3rd party APIs, which often use a REST architecture.

### Who is Roy Fielding?

He wrote a dissertation as a PhD student that first described Representational State Transfer (REST) architecture. He also is a principal author of the HyperText Transfer Protocol (HTTP).

### Why don’t the techniques that we use today work well when we need to be able to talk to all of the machines in the world?

I believe this is referring to the period of web developement perhaps in the late 90s or early 2000s before RESTful APIs and web frameworks were standard. Back then, the systems were far less agnostic in how they were used, and so there was a lot of development time spent on a lot of complex and more specialized layers that could only talk to a smaller number of machines, rather than for a more general-purpose consumption.

### What is the HTTP protocol that Fielding and his friends created?

HyperText Transfer Protocol. It defines a standard way for computers connected on a network to communicate for transferring hypermedia data. It provides a standard set of verbs such as GET, POST, PUT, and PATCH, and a standard format for uniform resource locators (URLs), which are like the "nouns" of the network.

### What does a GET do?

Sends an HTTP request to retrieve a resource at a given URL.

### What does a POST do?

Sends an HTTP request to add a new resource/data at a given URL.

### What does PUT do?

Sends an HTTP request to replace/update an entire resource at a given URL with a new resource/data.

### What does PATCH do?

Sends an HTTP request to replace/update only part of a resource at a given URL with some new resource/data.

## Things I want to know more about
