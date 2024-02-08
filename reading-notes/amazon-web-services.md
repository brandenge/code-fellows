# Amazon Web Services

## AWS EC2

### What is an EC2 Instance?

EC2 stands for Elastic Compute Cloud, which is one of the major products of Amazon Web Services. It is a virtualized server, which gives computing power which can be easily configured and scaled up and down based on demand (hence the name "elastic"). "Virtualized" means that it is only part of a whole real server's complete hardware. This is called a virtual machine. Virtualization is a software layer that partitions the hardware resources of a computer into multiple "instances", which are each separated from each other, but ultimately sharing the same hardware. For example, a single computer could be partitioned via virtualization into 10 different "instances", each with their own system configurations, and running their own separate applications completely independent of and isolated from one another. One instance would have no knowledge of any other instance running on the same machine. They can even run different operating systems.

### Name 2 use cases for EC2.

1) Web applications.
2) Machine learning/AI applications.

### Provide 1 reason to use ECS instead of Heroku.

Much greater power, customization, and control your compute resources and number of configuration options. Along with that, comes greater complexity.

## EC2 For Humans

### Where can we find EC2 on the AWS Console?

Under the "Services" tab in the top navigation bar, under the "Compute" category, at the top left of the listing of all AWS services.

### Explain the general difference between T2 Micro and XL.

These are different sizes of instances. The sizes are different in terms of amount of RAM and compute power available. A T2 micro instance is a very small instance size. And an XL instance has a lot more computing power.

### Explain a “Compute Cycle” to a non-technical friend.

A compute cycle is basically how the amount of compute power you have used is measured in cloud computing. You can think of it as gallons of gas used when filling your tank. The amount of compute power you have used may affect how much you are billed.

## Elastic Beanstalk

### What is Elastic Beanstalk?

An AWS service that deploys, manages, and scales web applications automatically. This includes provisioning, load balancing, auto-scaling, and application health monitoring.

### Describe the relationship between EC2 and Elastic Beanstalk.

EC2 and Elastic Beanstalk are 2 different AWS services. EC2 is the AWS service that provides the server instances which is the virtual machine that runs the applications. Elastic Beanstalk is the AWS service that handles more of the DevOps that helps to manage the deployment of the EC2 instances.

### Name some benefits of using Elastic Beanstalk.

It provides a lot of automation of DevOps infrastructure, allowing developers to focus more on writing code and less on their deployment infrastructure. It also gives easy control over that DevOps infrastructure when it is needed.

Sources:

- [AWS EC2](https://aws.amazon.com/ec2/)
- [EC2 For Humans](https://www.youtube.com/watch?v=lZMkgOMYYIg)
- [Elastic Beanstalk](https://www.youtube.com/watch?v=SrwxAScdyT0)
- [Virtual Machines](https://www.youtube.com/watch?v=yIVXjl4SwVo)
- [VMS and the Cloud](https://www.youtube.com/watch?v=l0DfHUWMjsU)

## Things I want to know more about
