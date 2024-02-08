# Socket.io

This topic is important because event-based applications and messaging is common and works well with object-oriented programming. And Socket.io, which implements WebSocket in Node, makes it much easier to create such event-based applications.

## Web Sockets

### What is a Web Socket?

It is a communications protocol but is different from HTTP/S. The protocol identifier is `ws` or `wss` (for Web Socket Secure). It operates on port 443, just like HTTPS, but it is still different from HTTPS. It also operates at layer 7 of the OSI model, just like HTTP.

The major difference between WebSocket and HTTP/s is that it does not use one-way communication that is used in the web request-response cycle and client-server paradigm. Instead, it opens connections and keeps those connections open for bidirectional traffic to flow at will. This allows for an event-based of communication - a more powerful messaging system. It also allows for the streaming of data and real-time data transfer.

Note that there is also a WebSockets API, which I believe is a browser API for using the WebSocket protocol.

### Describe the Web Socket request/response handshake and what happens once the connection is established.

A client sends an HTTP request to a server with `Upgrade: websocket` and `Connection: Upgrade` headers to request the server to upgrade the connection from HTTP to WebSocket. Additional headers are set to define the WebSocket key, protocol, and version number. The server then responds with a hash of the key that the client sent it, and some other headers to confirm it accepts the request to upgrade the connection. If the handshake is successful, the connection will stay open and begin using the WebSocket protocol.

### Web Sockets provide a standardized way for the server to send content to a client without first receiving a ____ from that client.

Without first receiving a request from that client. Every response does not require a request. It simply allows open, bi-directional messaging for the duration of the connection.

## Socket.io Tutorial

### What does the event handler io.on() do?

It executes an event handler when the type of event (provided as a string into the first argument) is fired (from the event emitter);

### Describe some possible proof of life or proof that the code works as expected

Add an onclick event listener onto a button on the frontend. Within the event handler for that event listener, call the event emitter with a type of event, and an event handler. Then on the backend, add io.on for the same type of event, and its own event handler to be executed when it sees that that type of event has been emitted/triggered.

### What does socket.emit() do?

It triggers the given type of event, which will then later execute the event handler functions for all the io.on or socket.on event listeners.

## Socket.io vs Web Sockets

### What is the difference between WebSocket and Socket.IO? (think Git and GitHub, or OAuth and Auth0).

WebSocket is the actual protocol technology, developed for browsers for web communication. WebSocket is also have a native API in the web browser.

Socket.IO is an API built on top of WebSocket that makes it easier to use it, specifically in either the Node or browser environments.

### When would you use Socket.IO?

If you have a Node application that wants to use Web Sockets.

### When would you use WebSockets?

When I only need to work with the front-end native browser API. Although, when you use Socket.IO you are also always still using WebSockets underneath it.

## OSI Model Explained

### What are a couple of key takeaways from this video?

The presentation layer in the OSI model has a few different parts:

1) Translation - converting data to binary
2) Compression - reducing the number of bits in the binary
3) Encryption/Decryption - securing the data

The session layer has a few different parts:

1) Session management
2) Authentication
3) Authorization

The transport layer has a few different parts:

1) Segmentation
2) Flow Control
3) Error Control

## TCP Handshakes Explained

### Translate the gist of this video to a non-technical friend

TCP stands for Transmission Control Protocol. It is a protocol to transport packets of data across the internet. It has a 3-way handshake process whenever a computer wants to open a connection with another computer. The 3 steps are as follows:

1) The client sends a SYN packet to a server, which requests to open a connection.
2) The server responds with a SYN ACK packet, which confirms the connection and requests an acknowledgement.
3) The client sends a final ACK packet, which is the final acknowledgement of the connection.

Sources:

- [Web Sockets](https://en.wikipedia.org/wiki/WebSocket)
- [Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)
- [Socket.io vs Web Sockets](https://www.educba.com/websocket-vs-socket-io/)
- [OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)
- [TCP Handshakes Explained](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

## Things I want to know more about
