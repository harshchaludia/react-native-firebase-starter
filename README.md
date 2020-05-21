# React Native Firebase Starter

This is a working app in which I have implemented all the basic starter screens like landing, login, register, and forgot page.

The app uses firebase, and config file has to be fed with api data in order to work with ease. With login, and register functionality, data of users is stored realtime in firebase. All the pages are validated with custom components, and forgot password functions have been implemented which helps user to reset the password using inbuilt firebase functions.


<p float="left" width="100%">
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/App_Screen.jpg" width="24%" />
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/Login_Screen.jpg" width="24%" /> 
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/Register_Screen.jpg" width="24%" />
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/Forgot_Password.jpg" width="24%" />

</p>

### Implementation
In the root directory
* Install dependencies: `npm install`



### Android

* You might need to do this to run it in Android Studio or on real device: `adb reverse tcp:8081 tcp:8081`
* And for the sample server: `adb reverse tcp:3000 tcp:3000`
* To run from command line try: `react-native run-android`

### Server

There is a server that the app hits for data. The data is only stored in memory, but it should produce a more realistic environment.

In the `server` directory

* Install nvm and node-4.2.3
* Install dependencies: `npm install`
* Run it: `npm start`

It has sample data in the `models.js` file. For example, there is a user bleonard (password: "sample") that you can log in as.

### Tests

The integration tests are run using [Appium](http://appium.io/).

There is also an [example](https://github.com/taskrabbit/ReactNativeSampleApp/blob/master/.travis.yml) of how to run it on Travis CI: [![Build Status](https://travis-ci.org/taskrabbit/ReactNativeSampleApp.svg?branch=master)](https://travis-ci.org/taskrabbit/ReactNativeSampleApp)

To run tests:

* Make sure you have the 9.0 simulators installed in XCode
* Compile app for the test environment: `npm run compile:test`
* Launch simulator and tests: `npm test`

### Compiling

You can compile and put it on the phone with: `npm run install:staging`

Not that there's a staging server at this point, but it's an example of how to compile things via the command line.

### Android

We'll get there, but we're still working on the iOS version.

# Current Concepts

### Navigation

The sole method of navigation (what's showing on the screen and where the back button goes) is via urls. We parse urls to determine the route stack. There is some stuff to make "related" url navigation look "right" (push and pop). Making everything addressable by URL is great for deep linking and forces each screen to be able to load all on it's own from simple data.

The Router handles parsing different routes depending if you are logged in or not. The urls must be able to represent the entire navigation stack, so that means they can be recursive like my friend's friend's friend's feed (sample://dashboard/follows/john/follows/sarah/follows/amy/posts).

#### Flux

The Components use Actions. Actions tend to use the API Services and dispatch an event. The Stores are listening to the events. The Components add and remove listeners to the Stores.

#### Environment

There is a model called Environment that gets bootstrapped from Objective-C. It knows things that are different per environment like what API server to talk to.

#### Data storage

Info is currently stored as json to the local file system.

#### Shared CSS

It uses the `cssVar` pattern from the sample Facebook apps.

#### API

It uses superagent to do HTTP requests and sets headers and other things like that.

#### Components

Some shared components that might be helpful

* SegmentedControl: Non-iOS specific version of that control
* SimpleList: make a list out of the props set
* Button: Helper to make them all similiar

#### Mixins

We are currently sharing code through mixins. Some of them might be generally useful.

* KeyboardListener: helps know the amount of space the keyboard is taking up
* DispatcherListener: subscribes and ubsubscribes from the Dispatcher for a component
* NavigationListener: react to navigation changes in a component

#### Extensions

We've been trying out ways to not use mixins. `AddSpinnerLoader` is an example of a higher-level component.

#### i18n

We've internationalized our app. Each component definies it's own keys.
This provides a sample of how that works.

#### Android too

We shipped our Android app! We need to update this to work there too.


## License

MIT
