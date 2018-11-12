import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./component/App";
import reducer from "./reducers/allReducer";

import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer);
console.log(store.getState());
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
