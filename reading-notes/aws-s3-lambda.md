# AWS S3 and Lambda

## AWS S3

### What is Amazon S3?

It is AWS's object storage system for storing, replicating, accessing, and analyzing any kind of data from anywhere.

### Name some use cases for Amazon S3

1) Building a data lake, which is a way of cataloging, storing, and analyzing data without a traditional schema or having to clean the data.
2) Data back ups
3) Data archives
4) Running cloud-native applications

### Name some beenefits of using Amazon S3

1) Powerful analytics using artificial intelligence (AI), machine learning (ML), and high performance computing (HPC).
2) Very robust availability (11 9's of availability beyond 99%).
3) Low cost - different storage classes give options for lowering cost, such as using S3 Glacier for archiving data.
4) Easier to meet and manage compliance requiremance.

## AWS Lambda Basics

### What is AWS Lambda?

AWS Lambda is another cloud compute solution, like EC2, but different. AWS Lambda functions are for even smaller compute tasks, much smaller than even the tiniest AWS EC2 server instance. Instead of an entire server instance which is meant to deploy an entire application, or some significant component of an application, AWS Lambda is intended to deploy just a single function. This breaks down an application into even smaller components, which allows for even finer levels of granularity and control in terms of auto-scaling, and customization. This allows different parts of an application to scale differently, giving greater flexibility and efficiency to the scaling of applications.

Like an EC2 server instance, each AWS Lambda function can use a different programming language and environment. However, there is less customization options of the environment. One key way that AWS Lambda is different than AWS EC2 is that AWS Lambda is fully managed on AWS infrastructure. It always uses AWS Linux (1.0 or 2.0) as the operating system for its runtime environment. Fully managed infrastructure means you can't see its implementation as much, and you have less control and ability to customize it. Basically, it is a black box. It also means that they automatically handle software updates and upgrades, and managing the network layer.

### Name some use cases for AWS Lambda

1) Scalable APIs
2) Serving an HTTP request
3) Individual tasks that run for a short time.
4) Any self-contained task.
5) Any computer task that has a very high variance in its levels of workload in its application.
6) Event-based data processing, such as notifications, counters, and analytics.
7) Task automation, such as cron jobs.
8) Any automated task that does not require an entire server to run at all times for it.
9) Integrating multiple AWS products/services together.

### Describe "serverless" to a non-technical friend

Serverless just means that you do not need to manage the servers yourself because someone else is managing the server infrastructure for you. The servers are fully managed and completely abstracted away from you.

## CDN

### What is a CDN?

CDN stands for Content Delivery Network. It is basically a collection of servers distributed around the globe that hold copies of applications, or copies of cached content that are served by applications, so that any user around the world making a request for that application or content will be able to request it from the server located closest to them, resulting in faster response times. It also increases the availability of the application or content on the CDN as any one point of failure in the network will not prevent access to the application or content.

### How does a CDN work with relation to the website visitor?

When a website visitor requests content from an originating server, they are re-directed to the nearest server that the originating server's CDN has. That CDN server will serve any requests that it is able to, and will communicate to the originating server for any other requests that it is unable to serve. If that CDN server goes down, the website visitor will simply be re-directed to the next nearest CDN server.

### What are the benefits of employing a CDN?

1) Improved response times (reduced latency).
2) Reduced loads on the originating server.
3) Increased availability.
4) Increased security, for multiple reasons, such as:
   - More obscurity, because clients do not connect directly with the originating server).
   - Increased protection against certain types of cyber attacks, such as DDOS attacks, because the load of such an attack gets spread around through the entire CDN.

## Things I want to know more about
