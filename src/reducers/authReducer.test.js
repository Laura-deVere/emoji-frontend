import reducer from './authReducer';

// The reducer returns a new state object after a specific action is called.

describe('Auth reducer', () => {

    const initialState = {
        user: null,
        isAuthenticated: false
    }

    test('returns initial state', () => {
        // pass dummy action to test initial state
        const action = { type: 'NO_ACTION' };
        expect(reducer(undefined, action)).toEqual(initialState);
    });

    test('returns correct state on sign in request', () => {
        const action = { type: 'SET_CURRENT_USER' };
        expect(reducer(initialState, action))
            .toEqual({ ...initialState, isAuthenticated: true })
    });
});