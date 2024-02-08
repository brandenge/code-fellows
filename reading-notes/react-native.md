# React Native

This topic is relevant because React Native is a common tool used in mobile application development.

## Getting Started with React Native

### Name three Core Components of React Native and describe what they do.

1) View - A container that provides a JavaScript interface for modifying CSS, similar to other UI or CSS frameworks. Renders content inside of it. Similar to a `<div>` HTML tag.
2) Text - A container for text-specific content. Displays text and has text styles. Similar to a `<p>` HTML tag.
3) Image - displays different types of images. Similar to an `<img>` HTML tag.

### What problem does React Native solve (why call it native)?

Because it allows you to build mobile applications using React and the app platform's native capabilities (i.e. the Android or iOS platforms). With React Native, you can use JavaScript to access the mobile application platform's native APIs.

### What are the building blocks of a React Native app? How does that compare to a React app?

A `view`, of which React Native provides several different kinds of core components for rendering different types of content. For example, `<View>`, `<Text>`, `<Image>`, `<ScrollView>`, and `<TextInput>`.

## Expo

### What solution does expo provide?

It tries to manage as much of the complexity of building mobile applications. It is an npm package that works with React Native. This includes allowing mobile application developers to develop only in JavaScript.

### Expo tries to manage as much of the complexity of building apps as possible, which is why we call it the ____ workflow.

It is called the "managed" workflow.

### What is the difference between React Native and Expo?

- React Native is an entire framework. Expo is an npm package that extends React Native.
- React Native does not depend on Expo. Expo however, does depend on React Native.
- React Native is what you use to develop the mobile application. Expo is a set of tools and services that you use to make that development easier. It is focused on managing developer workflow.

## Expo Snack

### Checkout this tool. What does snack allow you to do?

It allows you to develop a mobile application in the cloud, and then generates a QR code that has a shareable URL that you can scan to load and run the application directly on your phone.

## Ejecting

### What does “eject” mean within the context of Expo?

It means basically exporting your Expo project (which uses JavaScript and React Native to generate mobile application UI components that are native to the respective mobile platform - Android or iOS) and then importing it into a native application. This allows you to keep your old JavaScript React Native code, but to continue developing your application as a native application (i.e. Swift for iOS, or Kotlin or Java for Android).

### When should you not eject?

1) You only need to be able to distribute your application on the iTunes store or Google Play.
2) You don't want to have to write native code.
3) You want to keep the workflow benefits of using React Native and Expo.
4) You require Expo's push notification services.
5) You rely on the Expo community for technical support.

### Why might you choose to eject?

1) Your Expo project needs to be able to a use a native module that Expo does not currently support. This is usually only for very specific and uncommon use cases.

## Additional Questions

### Looking ahead at this module’s course schedule, What do you look forward to learning?

Well there is not much left is the course schedule, but I guess more about open source software and web frameworks.

### What are your learning goals after reading and reviewing the class README?

How to set up a basic mobile application that runs on our own smart phone.

## Things I want to know more about

Sources:

- [Getting Started with React Native](https://facebook.github.io/react-native/docs/getting-started)
- [Expo](https://expo.io/)
- [Expo Snack](https://snack.expo.io/)
- [Ejecting](https://docs.expo.io/versions/latest/expokit/eject)
- [React Native Basics Tutorial](https://facebook.github.io/react-native/docs/tutorial)
- [React Natve](https://facebook.github.io/react-native/)
