# :pushpin: React Native Boilerplate

React Native boilerplate repository version 0.0.1

## ⚡️Getting Started

### :hammer_and_pick: Configurations

1. Change package name, bundle id (iOS) or application id (android).
   Reference:
   - [Change package name](https://dev.to/karanpratapsingh/quick-guide-for-updating-package-name-in-react-native-3ei3)
2. Create your own keystore and key.properties.
   Reference:
   - [App Signing (keystore)](https://developer.android.com/studio/publish/app-signing)
   - [Create keystore using Keytool](https://reactnative.dev/docs/signed-apk-android)
3. Setup your firebase project for firebase analytics, crashlytics, and messaging.
   Reference:
   - [Understand Firebase Project](https://firebase.google.com/docs/projects/learn-more)
   - [Firebase for React Native](https://rnfirebase.io/)
4. Setup your android and ios project to integrate with Fastlane and Firebase
   Reference:
   - [Fastlane Official Documentation](https://docs.fastlane.tools/)
   - [Firebase Official Documentation for Android App](https://firebase.google.com/docs/app-distribution/android/distribute-fastlane)
   - [Firebase Official Documentation for iOS App](https://firebase.google.com/docs/app-distribution/ios/distribute-fastlane)
   - [Simple Fastlane and Firebase integration](https://github.com/JesuHrz/distribution-with-firebase-and-fastlane)
5. Configure your env with [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
6. Using [Atomic Design Pattern](https://paulonteri.com/thoughts/atomic-design-react)
7. Using [Redux](https://redux.js.org/), [Redux Toolkit and Redux Toolkit Query](https://redux-toolkit.js.org/)
8. Using [Native Base](https://nativebase.io/) UI material to design this boilerplate

### 🚚 How to run, and build Apk

NOTES: This boilerplate uses yarn as main command, not npm.

Example how to run android with development env
Make sure to open android simulator or connect android devices.

```shell
//To make sure devices have the same port with metro bundler
adb reverse tcp:8081 tcp:8081

yarn start:staging
yarn run:android
```

If there is error, try to run with android studio

Example how to run android with release env

```shell
//To make sure devices have the same port with metro bundler
adb reverse tcp:8081 tcp:8081

yarn start:release
yarn run:android
```

If there is error, try to run with android studio

Example how to build android release variant

```shell
yarn start:release
yarn release:android
```

If there is error, try to build with android studio

Example how to run ios with development env

```shell
yarn start:staging
yarn run:ios
```

If there is error, try to run with Xcode

Example how to run ios with release env

```shell
yarn start:release
yarn run:ios
```

If there is error, try to run with Xcode

### ⚙️ Supported Flavor

1. development
2. production
   To be added more.

### :test_tube: How to Test Coverage

Run `yarn test:cov` and it will generate coverage report on .coverage folder

### :new: Versioning

Using Semantic Versioning 2.0.0

Major.Minor.Patch

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards compatible manner, and
3. PATCH version when you make backwards compatible bug fixes.
   Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

### :capital_abcd: Naming Convention

camelCase for file and folder.

### :evergreen_tree: At this point, your project layout should look like this:

```
react-native-boilerplate
├─ .buckconfig
├─ .bundle
│  └─ config
├─ .commitlintrc.json
├─ .eslintignore
├─ .eslintrc.js
├─ .github
│  └─ workflows
│     └─ build.yml
├─ .gitignore
├─ .husky
│  ├─ _
│  │  ├─ .gitignore
│  │  └─ husky.sh
│  ├─ commit-msg
│  └─ pre-commit
├─ .prettierignore
├─ .prettierrc.js
├─ .ruby-version
├─ .vscode
│  ├─ .react
│  └─ settings.json
├─ .watchmanconfig
├─ CHANGELOG.md
├─ Gemfile
├─ LICENSE
├─ __mocks__
│  ├─ @react-native-async-storage
│  │  └─ async-storage.ts
│  ├─ helpers.tsx
│  ├─ react-i18next
│  │  └─ index.js
│  ├─ timeTravel.ts
│  └─ wrapper.tsx
├─ android
│  ├─ Gemfile
│  ├─ Gemfile.lock
│  ├─ fastlane
│  │  ├─ .env
│  │  ├─ Appfile
│  │  ├─ Fastfile
│  │  ├─ Pluginfile
│  │  ├─ README.md
│  │  └─ report.xml
│  ├─ gradle
│  │  └─ wrapper
│  │     ├─ gradle-wrapper.jar
│  │     └─ gradle-wrapper.properties
│  ├─ gradle.properties
│  ├─ gradlew
│  └─ gradlew.bat
├─ app.json
├─ babel.config.json
├─ index.js
├─ ios
│  ├─ Config.xcconfig
│  ├─ Gemfile
│  ├─ Gemfile.lock
│  ├─ Podfile
│  ├─ Podfile.lock
│  └─ fastlane
│     ├─ Appfile
│     ├─ Fastfile
│     └─ Pluginfile
├─ jest.config.js
├─ jest.setup.js
├─ metro.config.js
├─ package.json
├─ react-native.config.js
├─ sonar-project.properties
├─ src
│  ├─ __tests__
│  │  └─ App.test.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ OpenSans
│  │  │  │  ├─ OpenSans-Bold.ttf
│  │  │  │  ├─ OpenSans-BoldItalic.ttf
│  │  │  │  ├─ OpenSans-ExtraBold.ttf
│  │  │  │  ├─ OpenSans-ExtraBoldItalic.ttf
│  │  │  │  ├─ OpenSans-Italic.ttf
│  │  │  │  ├─ OpenSans-Light.ttf
│  │  │  │  ├─ OpenSans-LightItalic.ttf
│  │  │  │  ├─ OpenSans-Medium.ttf
│  │  │  │  ├─ OpenSans-MediumItalic.ttf
│  │  │  │  ├─ OpenSans-Regular.ttf
│  │  │  │  ├─ OpenSans-SemiBold.ttf
│  │  │  │  └─ OpenSans-SemiBoldItalic.ttf
│  │  │  └─ Poppins
│  │  │     ├─ OFL.txt
│  │  │     ├─ Poppins-Black.ttf
│  │  │     ├─ Poppins-BlackItalic.ttf
│  │  │     ├─ Poppins-Bold.ttf
│  │  │     ├─ Poppins-BoldItalic.ttf
│  │  │     ├─ Poppins-ExtraBold.ttf
│  │  │     ├─ Poppins-ExtraBoldItalic.ttf
│  │  │     ├─ Poppins-ExtraLight.ttf
│  │  │     ├─ Poppins-ExtraLightItalic.ttf
│  │  │     ├─ Poppins-Italic.ttf
│  │  │     ├─ Poppins-Light.ttf
│  │  │     ├─ Poppins-LightItalic.ttf
│  │  │     ├─ Poppins-Medium.ttf
│  │  │     ├─ Poppins-MediumItalic.ttf
│  │  │     ├─ Poppins-Regular.ttf
│  │  │     ├─ Poppins-SemiBold.ttf
│  │  │     ├─ Poppins-SemiBoldItalic.ttf
│  │  │     ├─ Poppins-Thin.ttf
│  │  │     └─ Poppins-ThinItalic.ttf
│  │  ├─ images
│  │  │  ├─ common
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ logo.png
│  │  │  │  └─ logo.svg
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ components
│  │  ├─ atoms
│  │  │  └─ index.ts
│  │  ├─ containers
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ molecules
│  │  │  ├─ ProductsCard
│  │  │  │  └─ index.tsx
│  │  │  ├─ UsersCard
│  │  │  │  └─ index.tsx
│  │  │  └─ index.ts
│  │  └─ organisms
│  │     ├─ FOProductsSection
│  │     │  └─ index.tsx
│  │     ├─ FOUserSection
│  │     │  └─ index.tsx
│  │     └─ index.ts
│  ├─ config
│  │  ├─ config.d.ts
│  │  ├─ constant.ts
│  │  ├─ index.ts
│  │  ├─ setting.ts
│  │  └─ url.ts
│  ├─ global
│  │  ├─ env.d.ts
│  │  ├─ index.d.ts
│  │  └─ navigation.d.ts
│  ├─ hooks
│  │  ├─ __tests__
│  │  │  └─ useLayout.test.ts
│  │  ├─ index.ts
│  │  ├─ useDebounce.ts
│  │  └─ useLayout.ts
│  ├─ index.tsx
│  ├─ lang
│  │  ├─ en.json
│  │  └─ id.json
│  ├─ navigation
│  │  ├─ __tests__
│  │  │  └─ navigation.test.tsx
│  │  ├─ index.tsx
│  │  └─ navigationService.ts
│  ├─ redux
│  │  ├─ __tests__
│  │  │  └─ application.test.ts
│  │  ├─ application
│  │  │  ├─ index.ts
│  │  │  └─ types.d.ts
│  │  ├─ index.ts
│  │  └─ rootReducer.ts
│  ├─ screens
│  │  ├─ Home
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ Setting
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ SignIn
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ Splash
│  │  │  ├─ hook.ts
│  │  │  ├─ index.tsx
│  │  │  ├─ styles.ts
│  │  │  └─ types.d.ts
│  │  ├─ __tests__
│  │  │  ├─ Setting.test.tsx
│  │  │  ├─ SignIn.test.tsx
│  │  │  └─ Splash.test.tsx
│  │  └─ index.tsx
│  ├─ services
│  │  ├─ baseQuery.ts
│  │  ├─ index.ts
│  │  ├─ products
│  │  │  └─ index.ts
│  │  └─ user
│  │     └─ index.ts
│  ├─ theme
│  │  ├─ __tests__
│  │  │  ├─ components.test.ts
│  │  │  └─ fonts.test.ts
│  │  ├─ baseStyle.ts
│  │  ├─ colors.ts
│  │  ├─ components.ts
│  │  ├─ fonts.ts
│  │  └─ index.ts
│  └─ utils
│     ├─ __tests__
│     │  ├─ generic.test.ts
│     │  └─ normalize.test.ts
│     ├─ generic.ts
│     └─ normalize.ts
├─ tsconfig.json
└─ yarn.lock

```

A brief description of the layout:

- `.github` has one github workflows directory.
- `android` is android configuration directory.
- `ios` is ios configuration directory.
- `.gitignore` varies per project, but most of it uses create react-native app base .gitignore file
