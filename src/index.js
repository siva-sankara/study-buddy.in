import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  
  <Provider store={store}>
   
      <App />
   
  </Provider>
);
