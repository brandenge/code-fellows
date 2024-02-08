# ToDo App

This application implements basic features for a ToDo list to demonstrate authentication and authorization-based rendering of UI components, along with pagination and use of Mantine UI components and styling.

## Deployed links

- Lab 31 Codesandbox - [Codesandbox Lab 31](https://codesandbox.io/p/github/brandenge/resty/lab-26?file=%2FREADME.md)
- Lab 32 Codesandbox - [Codesandbox Lab 32](https://codesandbox.io/p/github/brandenge/resty/lab-27?file=%2FREADME.md)

## Business Requirements

The To Do Manager application has the following overall requirements:

- Designed to match the mock-up
  - Header, Main Section Footer
  - Use Mantine for styling and visual components
- The header should present the main menu
  - Home Link, which shows the list of To Do Items as noted below
  - A Login section
    - When a user is not logged in:
      - Show Login form
        - Require Fields:: Username, Password
    - When a user is logged in:
      - Show a “Logout” link
        - When clicked, this should remove any cookies you have set and remove access
- In the “Main” section
  - Nothing should be visible until a user has logged in successfully
  - The list of items in the to do list
    - Based on user preferences, show listings in groups of (3, 5, etc) and provide the ability to view multiple “pages” of results
    - Each item in list should show the text of the item as well as the assignee
      - Based on user preferences, hide or show completed items
      - If shown, completed items should be styled differently making their status visually obvious
  - For users with “Update” permissions
    - When an item is clicked, toggle the “complete” status of the item.
  - For users with “Delete” permissions
    - Items should have a delete button associated with them
      - When clicked, remove the item from the list
  - For users with “Create” permissions …
    - A Form where the user can add a new item to the todo list
      - Items should have the following fields:
        - To Do Item Text
        - Assigned To
        - Status (complete/incomplete)
        - Difficulty (number between 1 and 5)
        - i.e...

``` JavaScript
const todo = mongoose.Schema({
  text: { type: String, required: true },
  assignee: { type: String },
  complete: { type: Boolean, default:false },
  difficulty: { type: Number, default: 1 },
});
```

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1) React
2) Functional Components
3) Settings delivered to the application using Context
4) User Login & Permissions delivered to the application using Context
5) Local Storage / Cookies for storing login status
6) Local Storage / Cookies for storing user preferences
7) Axios for performing API Requests
8) Mantine Component Library for styling
9) Test Driven Development, using Jest
  a) Tests will be runnable locally
10) Deployment to cloud provider

## Repository Branches

- Lab 31 Branch - [GitHub Lab 31 branch](https://github.com/brandenge/todo-app/tree/context-settings)
- Lab 32 Branch - [GitHub Lab 32 branch](https://github.com/brandenge/todo-app/tree/context-settings)

## UML Diagrams

- Lab 31 - ![Lab 31 UML Diagram](uml31.png)
- Lab 32 - ![Lab 32 UML Diagram](uml32.png)

Credits: Requirements and demo code from Code Fellows

- [Code Fellows Documentation](https://rkgallaway.github.io/module-7/curriculum/apps-and-libraries/todo/)
- [Code Fellows Demo Code](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-31/inclass-demo)
