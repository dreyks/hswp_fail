for https://github.com/mzgoddard/hard-source-webpack-plugin/issues/443

repro steps

run `yarn` and then run `yarn webpack` twice

`dist/main.js`
will contain

```js
/* harmony default export */ __webpack_exports__[\"default\"] = (undefined'wtf')
```
