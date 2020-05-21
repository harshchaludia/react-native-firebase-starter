# React Native Firebase Starter

This is a working app in which I have implemented all the basic starter screens like landing, login, register, and forgot page.

The app uses firebase, and config file has to be fed with api data in order to work with ease. With login, and register functionality, data of users is stored realtime in firebase. All the pages are validated with custom components, and forgot password functions have been implemented which helps user to reset the password using inbuilt firebase functions.


<p float="left" width="100%" style="padding-top:50px">
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/App_Screen.jpg" width="24%" />
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/Login_Screen.jpg" width="24%" /> 
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/Register_Screen.jpg" width="24%" />
  <img src="https://github.com/harshchaludia/react-native-firebase-starter/blob/master/screenshots/Forgot_Password.jpg" width="24%" />

</p>

## IMPLEMENTATION
In the root directory
* Install dependencies: `npm install`
* Start the project: `npm start --reset-cache`
* expo flexibility: `expo start`
* Build Android apk: `expo build:android -t apk`
* Build Android bundle: `expo build:android -t app-bundle`
* Build IOS archive: `expo build:ios -t archive`
* Build IOS simulator: `expo build:ios -t simulator` 
* Generate APK & IPA: `expo build:status`


## FIREBASE 


In the `master/src/core/config.js` directory,

Replace "" with your own firebase config!

``export const FIREBASE_CONFIG = {
apiKey: "",
authDomain: "",
databaseURL: "",
projectId: "",
storageBucket: "",
messagingSenderId: "",
appId: "",
measurementId: ""
};``

## PACKAGES 

| Package Name | Version |
| ------ | ------ |
|@react-native-community/masked-view|0.1.6|
    |expo|^37.0.0|
    |firebase|7.9.0|
    |react|16.9.0|
    |react-dom|16.9.0|
    |react-native|https://github.com/expo/react-native/archive/sdk-37.0.1.tar.gz|
    |react-native-gesture-handler|~1.6.0|
    |react-native-paper|^3.0.0|
    |react-native-reanimated|~1.7.0|
    |react-native-safe-area-context|0.7.3|
    |react-native-screens|~2.2.0|
    |react-native-status-bar-height|^2.4.0|
    |react-native-vector-icons|^6.6.0|
    |react-native-web|^0.11.7|
    |react-navigation|^4.0.10|
    |react-navigation-stack|^2.5.0|


## AUTHENTICATION

Firebase Authentication modules are used.

## COMPONENTS

Some shared components that might be helpful

* BackButton.js - A button navigating previous screen
* Background.js - Attach any background you want to any screen.
* Button.js - A button with styling
* Header.js - A header component
* Logo.js - Renders the log of the app
* Paragraph.js - Wraps with text styling
* TextInput.js - Input elements
* Toast.js - A notification message with error being shown.


## License

MIT
