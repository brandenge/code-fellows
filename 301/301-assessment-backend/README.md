# Code 301 Final Assessment - Server

This assessment comes in 2 parts (applications), a **client** and a **server** that together, will allow a user to create a list of items.

Each application is intended to be operated and tested independently, while also working together.

- The server, written in express, will be the API that the react application uses for data retrieval and storage.

## Feature Tasks

- Fix the bugs in the server.
- Fix the bugs in the client.
- Add **DELETE** functionality on both the server and client.
  - The client app has a "Delete Button" that is there but not wired up. Wire it up.
- Change the styling of the items list.

### The API Server

Located in the `/server` folder, this is an express server designed to perform CRUD (Create, Read, Update, Delete) operations on a mongo/mongoose data model: `items`.

#### Note: this server does not require you to install or configure MongoDB, that will be handled automatically.

> However, this server is broken in other ways. Your task is to fix the bugs and add the missing features.

How will you know that you've found them all? The tests will all pass!


#### Server: Running the tests

- Make sure the server is **NOT** running.
- From the root directory of the server in the terminal, run the command `npm test`.
- You should receive a list of the tests that are passing and failing just like you have seen in your code challenges.

#### Server: Getting Started

- Create an empty **private** repo on GitHub.
- Invite your instructor to the repo.
- Connect it to your server directory:
  - run `git init -b main`
  - run `git remote add origin <url-of-the-repo-you-just-created>`
  - A/C/P

- Install your dependencies.
- Run the tests.
  - with the server turned off run the command: `npm test`
- A "bug" is a defect or missing feature. Find the bugs and fix them.
  - You will know you have found the bugs when the tests all pass.
- Deploy to Heroku.

#### Server: Notes

- You may inspect the tests, but do not change them.
- Once you have this working, keep it running. The React app will be using it to save and retrieve data.
- If you are using an Apple device with the M1 chip and you get an error message about the Mongo Memory Server, you may need to run the following commands in your terminal shell before attempting to run the final exam server:
  - `export MONGOMS_DOWNLOAD_URL=https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.25.tgz`
  - `export MONGOMS_ARCH=x64`

## Submitting this assignment

- Submit the URLs to:
  - GitHub repositories for both your frontend and backend code.
  - URLs to both your deployed frontend and backend applications.

## Rubric

- 100 points total.
- 80 required to pass.

### Back End - 35 Points

- 05 points: server tests other than delete passing.
- 25 points: delete test passing.
- 05 points: deployed to Heroku.

### Front End - 35 Points

- 05 points: tests other than delete passing.
- 25 points: delete test passing.
- 05 points: deploy to Netlify.

### Integration - 5 Points

- 05 points: deployed Applications are properly configured to interoperate fully.

### Styling - 25 Points

- 15 points: functional use of Accordion component.
- 10 points: removal of all Table related elements.

## STRETCH GOALS

No extra points, just the satisfaction of being stretchy.

- Integrate Mongo Atlas so deployed server and client are fully functional.
- Add Auth0
