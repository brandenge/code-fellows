# Next.js Demo

This application is a demo of Next.js.

## Authors

- Branden Ge
- Daniel Frey
- Junyoung Son
- Timothee Odushina

## About Next.js

Next.js is a React-based framework that brings back-end functionality to React such as server-side rendering (SSR), as well as other improvements to performance, search engine optimization (SEO), and other workflow integrations such as automated deployments using Vercel.

## Score / Rating

8 out of 10

## Comments

The usability and learnability of Next.js is quite good. It has good documentation. And using it feels a lot like just using React. In fact, without using its server-side capabilities, it is difficult to tell the difference of it from React. We only used like 4-5 different components that were specific to Next.js. It does not provide UI Components, but we were able to use Material UI with it very easily.

The only major issue we ran into it was that by using a non-deterministic function (due to it using Math.rand()), it created a mismatch between the server-side rendering and client-side rendering, which threw a nasty error, called a React hydration error. And the only way we were able to resolve it was by changing the function in question to a deterministic one.

## Pros

- Feels just like React, so easy to learn coming from React.
- Brings backend functionality to React.
- Server-side rendering
- Search engine optimization
- Performance

## Cons

- We could not get its deployment feature to work. So it isn't as easy as it is supposed to be.

## System Requirements

The primary dependency for Next.js is React because it is built on top of React.

## Ramp-up Projections

It might take a few days for most mid-to-junior developers to become productive, assuming they already know React.

Without knowing React, a team would have to also learn React first, which definitely seems like it might take longer.

## Community Support and Adoption levels

Next.js is one of the most popular frameworks today, so it is widely adopted and with a huge community behind it.

## Getting started

- Run the command `npm run dev` from the application root directory.
- Open `localhost/3000` in the browser.

## Links and Resources

- [Next.js](https://nextjs.org/)
- [Next.js Docs](https://nextjs.org/docs/getting-started)
