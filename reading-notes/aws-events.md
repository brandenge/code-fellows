# AWS Events

This topic is relevant because AWS, cloud computer, and distributed systems in general are heavily reliant on event-based design. And these are the major event systems of AWS.

Sources:

- [AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)
- [AWS SNS and SQS](https://www.youtube.com/watch?v=mXk0MNjlO7A)
- [SQS and SNS Basics](https://www.youtube.com/watch?v=UesxWuZMZqI)
- [SNS JavaScript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)
- [SQS JavaScript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)

## AWS SQS vs SNS

### What is the difference betweeen SQS and SNS?

1) Entity type - SNS is a publish-subscribe service. SQS is a queueing service.
2) Message consumption - SNS messsages are push-based. SQS messages are pull-based.
3) Persistence - SNS messages have no persistence. SQS messages have a short persistence between 1 minute and 14 days.
4) Guaranteed delivery - SNS has no guarantee of delivery. SQS guarantees message delivery.
5) Consumer type - SNS consumers process the messages in different ways. SQS consumers are "supposed to be identical and process the messages the exact same way".
6) Event target - SNS is more targetted to other systems that care about an event. SQS is more targetted to your own system caring about an event.

In a common use case, SNS is used to distribute messages to multiple SQS queues or other AWS services in parallel. This is called a "fanout" pattern, because SNS fans-out its messages to multiple SQS queues.

### What are some use cases for both SNS and SQS?

SNS Use Cases:

1) Publish and consume batches of message.
2) The same message can be processed in multiple different ways.
3) Many subscribers are needed.

SQS Use Cases:

1) A simple queue with no additional functionality needed.
2) Decoupling applications to allow parallel asynchronous processing.
3) Only one subscriber is needed.

## AWS SNS and SQS

### Describe how to use SQS and SNS in a “fanout” pattern

SNS is used to broadcast/publish an event to many subscribers of that event. These subscribers can be any AWS service, including SQS. In this way, you create an distributed, asynchronous, parallel, event-driven system that has no "partial" failure scenarios.

### Explain how “push notifications” work, using SNS

SNS receives a message that triggers an event. That event is then broadcast/published to all of the subscribers of that event. In this way, the subscribers of the event receive the message without having to poll or pull for it after it occurs. Instead, it is just pushed immediately in real-time at the moment the event occurs.

## SQS and SNS Basics

### How might a large scale, distributed application make use of a Queue system like SQS?

- Can use a queue as a kind of load balancer, replacing a traditional load balancer. This allows incoming messages to be dumped into the queue, and the receivers to grab the messages at the pace that they need. This prevents an overwhelming amount of requests to cause a system failure.
- Use a queue to manage background processes/workers. This helps to ensure that the work is finished before a message is removed from the queue, thus guaranteeing delivery and that no work will be lost if a background process/worker dies in the middle of a task.
- Use "dead letter" queues to sideline any messages that cause errors in a separate queue to store the error-prone messages to be inspected later.

## Things I want to know more about
