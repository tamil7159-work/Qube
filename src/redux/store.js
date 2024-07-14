import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import applianceReducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(applianceReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;