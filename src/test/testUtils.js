import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

// Creating a test store with imported reducers, middleware, and initial state. Use to test async action creator later
export const storeFactory = (initialState) => {
    const middlewares = [ReduxThunk];
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}