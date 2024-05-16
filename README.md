# React Native Firebase
 React Native app with Firebase features

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Project command

To run this project, use `yarn run android` or `yarn run ios`.
if need clean this project, use `yarn run android-clean` or `yarn run ios-clean`.

| yarn run ... | Description |
| --- | --- |
| android | Run android development-mode on simulator or phone |
| android-debug | Build android .apk with “Debug” configuration |
| android-release  | Build android .apk with “Release” configuration  |
| android-clean | Fix building android if preDexDebug error on Windows OS|
| android-clean-mac | Fix building android if preDexDebug error on Mac or linux OS |
| android-bundle | Bundle with entry file index.android.js |
| adb-reverse | Reset port ADB to tcp:8081 |
| adb-uninstall | Uninstall android .apk with “Debug” configuration port ADB to tcp:8081 |
| ios | Run iOS project with Simulator |
| ios-install | install depedenceny for iOS project |
| ios-release  | Build iOS .ipa with “Release” configuration  |
| ios-build | Bundle xcode workspace |
| ios-clean | clean xcode & pod building |
| ios-device | list of iOS devices |
| ios-15 | Run iOS project with Simulator iPhone 15 only |
| yarn-clean| clean node modules |
| test  | jest test case and coverage reprot  |
| lint | eslint js file |

To fix MAC Apple silcon devices M1 cocapad pod install issue fix by command where more info [Github issue tracker](https://github.com/CocoaPods/CocoaPods/issues/10287) and [Youtube video](https://www.youtube.com/watch?v=zdv9qE4j-VU).
```sh
cd ios
sudo arch -x86_64 gem install ffi
arch -x86_64 pod install
arch -x86_64 pod update 
arch -x86_64 pod install --repo-update
cd ..

or

npx pod-install
```

## Dependency
```sh
yarn add @react-native-firebase/app @react-native-firebase/remote-config @react-native-firebase/crashlytics

yarn add @react-navigation/native @react-navigation/native-stack react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
npx pod-install ios

yarn add @react-navigation/bottom-tabs @react-navigation/drawer
```

## Firebase 
* [RNfirebase Example](https://rnfirebase.io/)
* [Remote Config Example](https://rnfirebase.io/remote-config/usage)
* [Analytics](https://rnfirebase.io/analytics/usage)
* [Firebase android setup](https://firebase.google.com/docs/android/setup)
* [Firebase ios setup](https://firebase.google.com/docs/ios/setup)
* [firebase-ios-sdk](https://github.com/firebase/firebase-ios-sdk)
* [Firebase Console](https://console.firebase.google.com/u/0/project/reactnativefirebase-f54c4/overview)
* [Swift pods cannot yet be integrated as static libraries](https://stackoverflow.com/questions/72289521/swift-pods-cannot-yet-be-integrated-as-static-libraries-firebasecoreinternal-lib)
* [Firebase Quickstarts for Android](https://github.com/firebase/quickstart-android)
* [React-Native: Firebase Error: No Firebase App DEFAULT](https://stackoverflow.com/questions/72641483/react-native-firebase-error-no-firebase-app-default-has-been-created-call)
* [Initializing secondary apps](https://rnfirebase.io/app/usage#secondary-apps)
* [ndk releases](https://github.com/android/ndk/releases)

## Firebase Crashlytics
* [Crashlytics Example](https://rnfirebase.io/crashlytics/usage)
* [Crashlytics Logrocket](https://blog.logrocket.com/guide-crashlytics-react-native/)
* [Get started](https://firebase.google.com/docs/crashlytics/get-started?platform=android#add-sdk)

## Links
* [Android enabling multidex](https://rnfirebase.io/enabling-multidex)

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
