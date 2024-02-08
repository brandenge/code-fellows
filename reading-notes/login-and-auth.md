# Login and Auth

## Role Based Access Control

### What is Role Based Access Control (RBAC)?

This is an approach to authorization to the IT systems of organizations. It essentially means instead of assigning access right (i.e permissions, or approved actions) directly to user accounts, you assign the access rights to a role type instead, such as "administration", or "accounting", etc. Then user accounts get assigned to role groups, which are a collection of roles, which connects their access rights to their account. These roles essentially act like templates for a collection of access rights.

### Share some an example of RBAC including all possible CRUD operations and correlating roles.

RBAC CRUD Operations:

- CRUD operations on an action.
- CRUD operations on a role.
- CRUD operations on a user.
- CRUD operations on a role group.
- CRUD operations on a role scope.
- CRUD operations on connecting an action to a role.
- CRUD operations on connecting a role to a role group.
- CRUD operations on connecting a user to a role group.

RBAC Example Roles:

- Administrative roles should be able to read certain employee or company data needed for their duties.
- Technical roles should be able to have higher level access to the specific IT systems that they manage or use.
- Accounting roles need access to sensitive company accounting information.

### What are the Benefits of RBAC?

- Simplification of authorization policies.
- Easier and more efficient for IT departments to administer.
- Scales well to very large organizations.
- More easily modifiable.
- Integrates better with 3rd parties as they can easily be set up with different roles that are specific to them.
- Improved compliance as it is easier to prove that regulatory requirements are being met.

## React Cookies

### Describe some react-cookie features.

It provides a context provider component to pass cookies as context throughout an application. It also provides a custom hook to get cookies, set cookies, and remove cookies. There are also a variety of other common methods such as get, and getAll to work with cookies.

### Describe some react-cookies features.

It provides a cookies object that can be imported in, and the cookies object has a variety of methods built into it, such as .load, .save, .loadAll, .select, .remove, and a couple of other less common methods. Each method also has a variety of options, such as working with the expiration of a cookie, its maxAge, domain, and other options.

### Which library would you prefer would you prefer? Why?

I think I might prefer react-cookies because it seems a bit simpler to use. I am thinking that although it does not directly provide a component to pass the cookie via context, I should be able to figure out a way to do that myself I think, just like creating a custom context for anything else, and just setting the imported cookie object as the value for the context. Then the only other immediately obvious possible advantage of the react-cookie library over react-cookies might be the custom hook it gives you. But again, I wonder if I could just build this custom hook myself relatively easily.

## Reflection

### What are your learning goals after reading and reviewing the class README?

Being able to use the <Login /> and <Auth /> components in an application to efficiently implement a login button and condition rendering of UI components based on authentication and authorization (i.e. if the user is logged in and has the correct permissions).

## Things I want to know more about

Sources:

- [What is RBAC?](https://digitalguardian.com/blog/what-role-based-access-control-rbac-examples-benefits-and-more)
- [React Cookie Library](https://www.npmjs.com/package/react-cookie)
- [React Cookie Component](https://www.npmjs.com/package/react-cookies)
