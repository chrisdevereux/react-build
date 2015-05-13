An opinionated, zero-configuration packager and debug server for React components and apps. 

Bundles small assets and code into a single .js bundle. Transpiles ES6, jsx and flowtype annotations using babel.

Development server allows component properties to be passed in via URL query parameters.

Eases development of loosely-coupled components without the hassle of setting up a build system for each module.


# Installation

````
npm install -g react-build
````


# Usage

### Start a local development server

````
# omit the -f to use index.js in cwd

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
