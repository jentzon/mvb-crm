import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const initStore = () => {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
};

export default initStore;
