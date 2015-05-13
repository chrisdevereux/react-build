react-build
-----------

An opinionated, zero-configuration packager and debug server for [React](https://facebook.github.io/react/) components and single-page apps.

Just `react-build` any commonjs module that exports a React component and you will have either a fast, live-reloading development server that preserves component state between reloads or a bundled html+js file ready for distribution.

Uses [Webpack](https://webpack.github.io/) and various plugins and transforms to do the heavy lifting. The main selling point over plain webpack is that comes batteries-included and doesn't require you to write a build config to package a module.

This is nice during development because it allows you to load up any component and edit in isolation. Component properties can be passed in via the query url (plain text or JSON values). Eg: http://localhost:8080/?greeting=hello;greetee=world


# Installation

````
npm install -g react-build
````


# Usage

### Start a local development server

````
# Omit the -f to use index.js/jsx in current directory.
# Defaults to port 8080

cd ~/my-app/src
react-build -f my-component.js

````


### Bundle a single page webapp for distribution

````
cd ~/my-app
react-build -f src/main.js -o dist/app.js
````


### Advanced usage

See above
