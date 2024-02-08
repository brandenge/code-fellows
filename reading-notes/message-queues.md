# Message Queues

Message queues are a common implementation when dealing with event-based programming, because any events that were broadcast but not received by the receiver must be saved for the next time that the receiver re-establishes a connection to be able to view the events and update its state accordingly if needed.

## Socket.io Chat Example

### Explain to a non-technical recruiter what the Chat Example (above) does

The chat example is using a WebSocket connection which is implemented via Socket.io, which extends the WebSocket technology (but is not compatible with it). This WebSocket connection allows for the connection to stay open, and push-notifications to be sent, rather than the typical pull-based model of the normal web request-response cycle. A key difference here is that with the web request-response cycle, the server is unable to directly push messages to clients without first getting a request from the client to do so.

This bi-directional, push-based system makes it easier to implement and scale real-time application features.

### What proof of life are we getting on the backend from the above app?

The 'connection' and 'disconnect' events are logging to the backend console when a user has connected or disconnected, respectively.

### Socket.IO gives us the i0.emit() method to send an event to everyone. What flag would you use if you want to send a message to everyone except for a certain emitting socket?

broadcast. For example, socket.broadcast.emit().

## Rooms

### What is a room and how might a room be useful?

A room is like a channel. It represents a subset of all the socket connections, with only socket connections that have joined that specific room.

Rooms are useful for only broadcasting events to a certain group or sub-group of connections. This allows you to select only the specific connections that you want to broadcast to.

### How do you join a room?

Using `socket.join(roomName)`. This will emit a `join-room` event.

### How do you leave a room?

`socket.leave(roomName)`. This will emit a `leave-room` event.

## Namespaces

### What is a Namespace and what does it allow you to do?

It is another type of communication channel (like rooms, but different from rooms). It allows you to use multiple different channels that share the same connection. Each namespace channel can be selected via some branching logic. Having multiple channels share a single connection in this way is called 'multiplexing'.

Note that `rooms` are like children within a `namespace`, in the hierarchy of channels. In other words, a namespace may contain many rooms, but a room may only belong to a single namespace.

### Each namespace potentially has its own what? (hint: 3 things)

1) Event handlers
2) Rooms
3) Middlewares

### Discuss a possible use case for separate namespaces

Creating a special name space for different access roles (i.e. using RBAC). For example, a different name space for users, writers, editors, and admins. Then you can put all your logic related to each role within its respective namespace.

## Things I want to know more about

Sources:

- [Socket.io Chat Example](https://socket.io/get-started/chat/)
- [Rooms](https://socket.io/docs/v4/rooms)
- [Namespaces](https://socket.io/docs/v4/namespaces/)
- [Socket.io Emit Cheatsheet](https://socket.io/docs/v4/emit-cheatsheet/)
