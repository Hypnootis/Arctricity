# Some information comes here as necessary

Make sure you have node.js installed, the latest version (18.x.x) should work fine.

If you've just copied the repo, do:

```bash
cd client/
npm install
```
Then run expo:
```bash
npx expo start
```

All the dependencies necessary should be in package.json, so just do npm install
the first time before starting up, after that it's unnecessary.

## Glossary
### npm
Node package manager, manages all of the dependencies of the project. Think ```pip``` in Python. In our project, doing ```npm install``` has npm go through the package.json file, find all the dependencies and download them locally. This reduces the size of the repository when sharing, and makes it convenient to set up development on a new machine. All the dependencies are found from the [package registry](https://www.npmjs.com/).

If you want to add a new library from the package registry to the project, inside the client folder run:
```bash
npm install %package_name%
```
Where %package_name% is the name of the package that you want to install.
### npx
Node package execute, it can be used to run scripts in remote or locally installed npm packages. In our project, we use it to start the Expo development environment.
### React
A Javascript library for building user interfaces with a component based system. [(more information)](https://reactjs.org/docs/getting-started.html)
### React-native
Cross-platform library for building applications, based on and very similar to React. Can be compiled to Android, iOS and web. [(more information)](https://reactnative.dev/docs/getting-started)
### Expo
Third-party development environment for React-native. Provides live refresh when changing the code, ability to test your app via a mobile app in real time and various other convenient features that a developer might want. [(more information)](https://docs.expo.dev/)
### React-native paper
Design library for React-native. Basically provides components for common UI elements that also look nice. [(more information)](https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator)
