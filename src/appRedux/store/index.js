import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootSaga from "../sagas/index";
import createRootReducer from "../reducers";
// import rootReducer from "../reducers";

// const sagaMiddleware = createSagaMiddleware();
// // export default function createStore(rootReducer) { 
// sagaMiddleware.run(rootSaga);
// // };

const createBrowserHistory = require("history").createBrowserHistory;

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware, routeMiddleware];

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    // compose(
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ...middlewares
      )
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
