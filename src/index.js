import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app";

const store = createStore(reducer);

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
