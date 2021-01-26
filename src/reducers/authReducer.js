import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
    user: null,
    isAuthenticated: false
}
export default (state = {}, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return { ...state, ...action.payload, isAuthenticated: !state.isAuthenticated };
        default:
            return state;
    }
}