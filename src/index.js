import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
