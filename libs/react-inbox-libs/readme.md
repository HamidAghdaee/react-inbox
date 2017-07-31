# creating widgets as libraries:

-  create folder `libs` in root directory of widget SPA.

-  create folder `widget-libs` under the `libs` directory.

- run `npm init` with all defaults.

- copy the following contents into `package.json`:

```
{
  "name": "@databraid/react-inbox-libs",
  "version": "1.0.2",
  "description": "",
  "main": "index.js",
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "NODE_ENV=development babel --presets react-app -D -d lib ../../src/"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1"
  },
  "dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.5",
    "redux": "^3.7.2",
    "redux-thunk": "^2.2.0"
  }
}
```
- replace `name` with the the correct name for your SPA widget in the npm org.

- replace `version` with "1.0.0"

- the `dependencies` may need to be updated if your code has any other js libary dependencies. `css` dependencies will be handled on the receiving side.

- run `npm run build` which will generate the `lib` directory.

- publish your npm package, run `npm publish`.

- in the future to publish changes to the lib, run `npm version`.

# using a widget lib on the importing side.

* run `npm install --save  @databraid/your-widget-name`

* then you use ` import DefaultExport from  '@databraid/your-widget-name/lib';` to work the widget default export.
