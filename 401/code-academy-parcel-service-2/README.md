# LAB - Class 12

## Project: Code Academy Parcel Service (CAPS) Phase 2

### Authors: Branden Ge

### Problem Domain

This lab demonstrates how to implement an event-driven application using Socket.io. Socket connections are established via Socket.io, and then a series of event listeners and event emitters pass messages to each other.

This example mimics a delivery service passing messages regarding the updated status of a shipped package that is sent from vendors to delivery truck drivers. A server hub runs in the middle, in-between the vendors and the drivers, acting as an intermediary and forwarding messages from vendors to drivers and from drivers to vendors.

- [GitHub Repo](https://github.com/brandenge/code-academy-parcel-service-2)

### Setup

- N/A

#### Running the app

1) Run `node server/index.js` to start the server hub event listeners.
2) Run `node drivers/index.js` to start the drivers event listeners and emitters.
3) Run `node vendors/index.js` to start the vendor event listeners and emitters.

#### Features / Routes

Events

1) New Order - emitted from vendorEvents to itself to trigger the entire event chain.
2) Pickup - emitted from vendorEvents
3) In-Transit - emitted from driverEvents
4) Delivered - emitted from driverEvents

Event emitters from the server to vendors use Socket.io rooms that are specific to each vendor.

#### UML Diagram

![UML Diagram](uml12.png)

Diagram created with [Figma](https://www.figma.com/)

#### Credits: [Demo code from Ryan Gallaway at Code Fellows](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-12/inclass-demo)
