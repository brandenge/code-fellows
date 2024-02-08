# LAB - Class 16

## Project: AWS Cloud Servers

### Author: Branden Ge

### Problem Domain

This lab demonstrates how to deploy a simple server to AWS with EC2 and Elastic Beanstalk using both the AWS GUI and the AWS CLI.

- [CI/CD GitHub Actions](https://github.com/brandenge/cloud-server/actions)
- [CLI Deployed](http://cloudserverclideploy-dev.us-east-2.elasticbeanstalk.com)
- [GUI Deployed](http://cloudserverguideploy-env.eba-tujnwzhz.us-east-2.elasticbeanstalk.com)

### Setup

- Add `.env` file with a `PORT` variable set to a port number as shown in the `.envsample`.

#### Running the app

- `npm start` or `nodemon` (if you have nodemon) to start the application.

#### Features / Routes

- GET : `/` - sends a 'Hello World' greeting.
- GET : `/hello` - sends a greeting by name with a name query parameter.
- GET : `/bad` - designated bad route that always responds with a 500 Internal Server Error.
- GET : `*` - catch-all route which always responds with a 404 Not Found error.

#### Processes

GUI Deployment

1) Navigate to the Elastic Beanstalk service in the AWS console.
2) Create a new application.
3) Set the appropriate environment settings.
4) Check your package.json for `main` set to `index.js` and `start` script set to `node index.js`.
5) Create a zip file of the application, including a package.json, an index.js, and an app.js or server.js. Zip the files directly without putting them in any other folder (must be a .zip - right click and look for a compress option).
6) Upload the zip file of the application into the Elastic Beanstalk GUI.
7) Deploy the application.

CLI Deployment

1) Create a new user, and click through to add the user to a group with permissions for AWS Elastic Beanstalk.
2) Get user's access key and secret access key.
3) Run the command `aws configure` in the terminal.
4) Go through the prompts, selecting the appropriate options, and inputting the access key and secret access key.
5) Run the `eb init` command. Go through the prompts.
6) Run the `eb create` command. Go through the prompts.
7) Run the `eb deploy` command when you make future changes to automatically re-deploy.

#### Tests

- `npm test` to run tests

Diagram created with [InVision](https://www.invisionapp.com/)

#### Credits: [Demo code from Ryan Gallaway at Code Fellows](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-01/inclass-demo)
