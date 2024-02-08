# AWS API Gateway, Dynamo, and Lambda

## AWS API Gateway Overview

### What is Amazon API Gateway?

"Amazon API Gateway is a managed service that allows developers to define the HTTP endpoints of a REST API or a WebSocket API and connect those endpoints with the corresponding backend business logic. It also handles authentication, access control, monitoring, and tracing of API requests."

We can kind of think of Amazon API Gateway as a kind of middleware, that runs in front of the backend and adds a lot of different functionality, and makes mapping end-points to various AWS services such as AWS Lambda functions easier.

### Why is Amazon API Gateway an important part of the Serverless ecosystem?

Because it provides a powerful integration between the HTTP endpoints of a REST API or WebSocket API to various other AWS serverless services by connecting an HTTP endpoint to an AWS Lambda function, which can then integrate with any other AWS service.

### How does API Gateway integrate with other AWS services?

AWS Gateway has support for several direct integrations, such as:

1) "Invoking an AWS Lambda function."
2) "Invoking another HTTP endpoint."
3) "Making an HTTP call against the API of any AWS service that provides an HTTP API."
4) "Returning a mock response generated within API gateway without calling out to other services."

## AWS API Gateway

### What are the some benefits of using Amazon API Gateway?

- Fully managed authentication and authorization, or easily create your own custom authorization using a Lambda authorizor from AWS Lambda.
- Efficient API management - can easily manage multiple versions of an API, quickly iterating, testing, and releasing new versions.
- Reduced latency by taking advantage of Amazon's CDN service CloudFront.
- Low-cost scaling.
- Easy monitoring.
- RESTful API options, which includes both HTTP APIs and REST APIs, with HTTP APIs being much cheaper.

### What two API types might you choose from?

1) RESTful APIs - This includes both HTTP APIs and REST APIs (HTTP APIs are cheaper).
2) WebSocket APIs - For two-way, real-time communications.

## AWS DynamoDB Guide

### What is DynamoDB?

"Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools."

### Under what circumstances would you recommend DynamoDB over MongoDB?

1) "Applications with large amounts of data and strict latency requirements."
2) "Serverless applications using AWS Lambda."
3) "Data sets with simple, known access patterns."
4) You want to integrate with other AWS Services.

## AWS DynamoDB

### Explain to a non-technical friend how DynamoDB works

1) You configure key features, such as tables, recovery, encryption, capacity, and partitioning.
2) You export, analyze and stream your data, either to AWS services, or a private VPC. This is done by exporting table data.
3) The AWS services (or private VPC) consumes the data to use it.

## Dynamoose

### What is Dynamoose?

This is the Object Relation Model/Map (ORM) for Amazon DynamoDB. In other words, it allows developers to interact with DynamoDB with JavaScript. It is heavily inspired by Mongoose, so it uses the same syntax. Dynamoose serves the same ORM role for DynamoDB as Mongoose does for MongoDB (or sequeulize does for PostgreSQL in a SQL context).

### What are some key features of Dynamoose?

> - Type safety
> - High level API
> - Easy to use syntax
> - DynamoDB Single Table Design Support
> - Ability to transform data before saving or retrieving items
> - Strict data modeling (validation, required attributes, and more)
> - Support for DynamoDB Transactions
> - Powerful Conditional/Filtering Support
> - Callback & Promise Support
> - AWS Multi-region support

## Things I want to know more about

Sources:

- [AWS API Gateway Overview](https://www.serverless.com/amazon-api-gateway)
- [AWS API Gateway](https://aws.amazon.com/api-gateway/)
- [AWS DynamoDB Guide](https://www.dynamodbguide.com/what-is-dynamo-db/)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
- [Dynamoose](https://dynamoosejs.com/getting_started/Introduction)
