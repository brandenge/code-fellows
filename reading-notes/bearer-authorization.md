# Bearer Authorization

## JWT Intro

Source: [Introduction to JSON Web Tokens](https://jwt.io/introduction/)

### What is a JSON Web Token (JWT)?

A token is like a special code that is used to validate that information being provided has not been tampered with and is coming from the expected receiver. Web tokens are tokens used by web applications. A common use of web tokens is to authenticate a user's requests for their current session after they have logged into a web application. JSON Web Token (JWT) is an open standard for web tokens which uses JSON objects that are then base64 URL encoded.

### When should we use JSON Web Tokens?

Whenever we validate a user's credentials (their username and password) when they log into our web application. We then generate the web token and send it back to them, for them to continue authenticating all of their future requests in their current session. Whenever we receive a token, we continue to compare it to ensure it matches what we sent, to verify that the request is coming from the same user that authenticated when they logged in originally.

### Claims are expected in which structural component of a JWT?

The payload component.

There are also 3 types of claims:

1) Registered - these are standard claims (i.e. claims that are part of the open standard). They are recommended, but not required.
2) Public - these are custom claims, which are like meta-data, which are public. Any server generating the token creates its own public custom claims to hold its meta-data.
3) Private - these are private custom claims.

## JWT Security

Source: [Stack Overflow Thread](https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure)

### If I get a JWT and I can decode the payload, how can we call that secure?

It is secure in the sense that it cannot be tampered with. You can view the contents of the header and payload within the JWT. However, you cannot change their contents without invalidating the signature.

Furthermore, JWT can also optionally still be encrypted, which will prevent anyone without the key from being able to view its contents as well.

### If sending a JWT, what must sender and receiver both know? Hint, it’s appended in the signature.

The secret. This is a secret variable that was included in the signing algorithm at the moment the JWT was first created.

### Explain how concatenated content and secret can be sent and received securely to a non-technical recruiter.

If both the sender and recipient know a shared secret, then the recipient can use that secret to re-calculate the digital signature that was created by the sender and check if what they received has the same matching signature. If the signature matches, they know the message has not been tampered with and came from the expected sender. If the signature does not match, then they know that the message did not come from the expected sender, and that the message has been tampered by and another party.

## JWT Explained

Source: [Bitfumes - YouTube Channel](https://www.youtube.com/watch?v=926mknSW9Lo)

### Why use JWT?

- They are very compaact, which results in fast transmissions.
- They are self-contained, meaning that they contain the meta-data information about the user. This avoids the need for an extra transmission and query the database more than once.
- They are very simple to understand, create, and handle.
- It uses an open standard.

### JWT is Compact and self-contained. Describe how this is useful to a non-technical friend.

- Being compact means that it uses less data, which makes it faster to transmit. This could be important for people with slower internet speeds, or using mobile/wireless networks for internet.
- Being self-contained means that the token includes not only a signature to validate itself, but also meta-data about the user. Possible meta-data might be when the JWT expires, or whether or not the user has admin priveleges. Including all of this together in a self-contained JWT means that additional transmissions over the network are not needed to get all this meta-data. It also could reduce the number of queries to the server's database to retrieve information about the user if it is already provided in the JWT.

### What are the three components (the structure) of a JWT signature?

1) Header
2) Payload
3) Signature

## Things I want to know more about
