# Authentication

This subject is relevant as many application must have an authentication feature to protect access to user profiles and their private data in the application.

## Securing Passwords

Source: [Securing Passwords with Bcrypt Hashing Function - The Hacker News](https://thehackernews.com/2014/04/securing-passwords-with-bcrypt-hashing.html)

### Explain to a non-technical friend how you would safely hash and store a password

You use a hashing algorithm to create a hash of any data. Hashes cannot be reversed, so they are particularly useful for validating data that does not need to be read directly. This makes hashes particularly useful for storing passwords, since the passwords only need to be checked if they are valid. This way, the password does not need to be stored in the database, only the hash of the password needs to be. When the user enters their password, it goes through the hashing algorithm, and the resulting hash is what is compared to the hash in the database to see if it matches. If an attacker compromises the database and steals the data, they only get the hashes of the passwords, not the passwords themselves.

### What is Bcrypt?

It is a hashing algorithm. What makes it unique as a hashing algorithm is that it uses a technique called "key stretching", which allows the hash key to be extended to variable lengths of your choosing. This modifies the work factor (which is also called the "security factor") of the hash. This allows the developer to determine how computationally intensive the hash function should be. It also allows it to be modified in the future to maintain parity with the increasing power of computers over time.

### Why might you use something like Bcrypt?

If you want to increase the security of your application, and also make it more future proof to increasing power of computers over time. It can be easily implemented using a wide variety of programming languages.

## Basic Auth

Source: [Basic access authentication - Wikipedia](https://en.wikipedia.org/wiki/Basic_access_authentication)

### What is Basic Authentication?

It is a method for a web browser/client to send a username and password to authenticate/authorize themselves with a website via an HTTP request. It consists of adding an `Authorization` header to the request, in the formation of: `Authorization: Basic <credentials>` where `<credentials>` is the Base64 encoding of a user name and password in the format of `<username>:<password>`.

### What properties are necessary in the header of a Basic Auth request?

1) `Authorization` header.
2) `<username>:<password>` is encoded using Base64 encoding.
3) Because the username and password are parsed by the colon in between them, the username cannot contain a colon.
4) The encoding of the username and password is prepended with `Basic`, followed by a space.
5) This is then added as the value of the `Authorization` header.
6) The final format is `Authorization: Basic <credentials>`.
7) A full example is: `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`.

### How are `username:password` in Basic Auth encoded?

Using the Base64 encoding. The way that this encoding work is by first converting the data to binary, and then transforming each byte of the binary data into a set of 64 character, hence the name Base64.

Source: [Base64 - Wikipedia](https://en.wikipedia.org/wiki/Base64)

## OWASP

Source: [OWASP - Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

### Define the authentication process to a non-technical recruiter

There are many different types of authentication processes. The most common one is supplying a username (or ID) and password combination to authenticate. But even that could have many different variations in how the credentials are transmitted. There are many different protocols and technologies that are used to do authentication. Other common examples are biometric information, such as a fingerprint or an image of a face on a mobile phone. Also two-factor authentication (2FA) or multi-factor authentication is becoming increasingly popular more recently. This is the combination of a password along with one of the other forms of authentication. One common example of a 2nd authentication factor is a USB key hardware token, or an authenticator application that generates random 6-digit keys every 30 seconds or so that can be used.

### How should your error messaging respond (both HTTP and HTML)? Why?

It should always respond in a generic manner (pick a single way to respond for all errors). This is so that attackers cannot get more information about how your web application's security.

## Things I want to know more about

### What is OWASP?

OWASP stands for the Open Web Application Security Project. It is an an online community dedicated to free and open online educational resources about the field of web application security. It is led by a non-profit organization called The OWASP Foundation.

Source: [OWASP - Wikipedia](https://en.wikipedia.org/wiki/OWASP)
