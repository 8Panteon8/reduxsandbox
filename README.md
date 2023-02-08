# Redux practice

- **Library installation**

```shell
npm install --save redux react-redux
```

- **Creating reducer**

```javascript
const reducer = (state = 0, action) => {
  // if (state === undefined) {
  //   return 0;
  // }
  switch (action.type) {
    case "RND":
      return state + action.payload;
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;

    default:
      return state;
  }
};

export default reducer;
```

- **Store initialization and import reducer**

```javascript
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);
```
> Now ~createStore~ considered deprecated, can use `import { configureStore } from "@reduxjs/toolkit"`


- **Creating actions**
```javascript
export const inc = () => ({ type: "INC" });
export const dec = () => ({ type: "DEC" });
export const rnd = (payload) => {
  return {
    type: "RND",
    payload: Math.floor(Math.random() * 10),
  };
};
```

- **Adding provider**
```javascript
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
---
**How to make it work?**

Install the dependencies:
```shell
npm install
```
Running a web server:
```shell
npm start 
```
Build app on React:
```shell
npm run build 
```
