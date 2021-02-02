/* eslint-disable import/no-anonymous-default-export */
import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
    user: null,
    isAuthenticated: false
}

export default function (state = initialState, action) {

    // console.log(action);
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state, ...action.payload, isAuthenticated: true
            };
        default:
            return state;
    }
}