import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/grid.css";
import Routes from "./routes";
import * as serviceWorker from "./serviceWorker";
/*
const store = createStore(
  rootReducer /!* preloadedState, *!/,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
*/

const enhancers = applyMiddleware(thunk);

const store = createStore(rootReducer, composeWithDevTools(enhancers));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
