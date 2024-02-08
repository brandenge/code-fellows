# Authentication

This reading is relevant because setting up authentication is a common task when creating web applications, and we will be practicing this in class.

## OAuth

Source: [What is OAuth?](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)

### What is OAuth?

An open standard authorization protocol or framework. OAuth 1.0 is considered a protocol. OAuth 2.0 is considered a framework. Note that it does not necessarily include authentication, which is a separate process that verifies the identity of the user, meanwhile authorization checks that the user has the appropriate permissions to perform the action they are trying to do.

### Give an example of what using OAuth would look like.

Let's say I want to log into a developer-related website that allows me to use my GitHub credentials to log in, rather than use a separate username and password just for that website. There would be a button saying I could log in with my GitHub credentials, and it would be a one button click to log in, without having to enter in any separate username and password. The website I am trying to log in will communicate with GitHub, and perform and authorization process to grant me access to log in.

This could also be used for sharing data rather than logging in, such as attaching a file from a cloud storage provider into an email that is a different company.

### How does OAuth work? What are the steps that it takes to authenticate the user?

Basically the website that is trying to consume the user's authentication or authorization from a trusted 3rd-party site (such as Google, GitHub, LinkedIn, etc.) acts as a middle man between the user and their trusted 3rd-party site.

1. The user visits a web application and clicks a button to use OAuth from an OAuth provider site (such as Google, GitHub, LinkedIn, etc.) to authorize their use of that web application (either to log in, or use some service it provides).
2. The web application sends a request to the OAuth provider for a request token.
3. The OAuth provider provides a request token to the web application.
4. The web application requests the user to approve the request token.
5. The user approves the request token in some way, perhaps being re-directed to the OAuth provider site and re-authenticating themselves.
6. The OAuth provider provides an approved access token directly to the user (note that the OAuth provider bypasses the web application this time, and the request token becomes an access token).
7. The user provides the web application with the approved access token.
8. The web application provides the OAuth provider with the approved access token that was given to it by the user. This proves that they have the user's permission for web application to access the OAuth provider's site on behalf of the user.
9. The web application is now authorized to perform whatever actions its access token authorizes them to do.

### What is OpenID?

OpenID is an open standard for authentication. Authentication is different from authorization. Authentication verifies a user's identity, such as by using a username and password. It could also use IP address, client information, and other behavioral factors to attempt to authenticate a user. Authorization means that after the user's identity has been verified/authenticated, further checking if that user has the appropriate level of permissions or not.

## Authorization and Authentication Flows

Source: [Authentication and Authorization Flows](https://auth0.com/docs/get-started/authentication-and-authorization-flow)

### What is the difference between authorization and authentication?

Authentication verifies a user's identity. It ensures that the person is who they say they are. This is done most commonly with a username and password. But it could also use biometrics, IP addresses, client information, and behavioral/historical data.

### What is Authorization Code Flow?

The process of a web application exchanging an authorization code for a token.

### What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?

An extension of OAuth 2.0 that has an added security measure (the proof key) to grant additional security and protect against certain security flaws in OAuth 2.0, such as injection attacks, which can be more dangerous in certain situations.

### What is Implicit Flow with Form Post?

This is for applications that cannot securely store client secrets, such as a token. It uses the POST method on a form to perform the handshake necessary for OAuth instead. It is not best practice and is considered less secure.

### What is Client Credentials Flow?

An alternative way of authenticating and authorizing that uses a client ID and a client secret, instead of a username and password. It is mean for machine-to-machine communication.

### What is Device Authorization Flow?

This sends a user a link to go to and click on in order to authorize a device. This is common for mobile devices where entering text is less convenient.

### What is Resource Owner Password Flow?

This is an authentication and authorization flow that just relies on a username and password. It is not recommended and considered less secure, probably mostly because users statistically will be likely to have weak passwords.

## Things I want to know more about
