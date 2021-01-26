import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import { signIn, setUser, setError } from './';

// Mock store for access to getActions function
const middlewares = [Thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const mockSuccess = data => ({ status: 200, response: { data } });
const mockError = error => ({ status: 500, response: error });

describe('signIn action creator', () => {

    beforeEach(() => {
        // clear store before each test
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
        store.clearActions();
    });

    test('dispatches setUser action when user signs in successfully', () => {
        const user = {
            fname: "Laura",
            lname: "Hopkins",
            email: "lauradevh@gmail.com",
            emojis: []
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockSuccess(user));
        });

        const expectedActions = [setUser(user)];

        store.dispatch(signIn(user)).then(() => {
            const actionsCalled = store.getActions();
            expectedActions(actionsCalled).toEqual(expectedActions);
        });
        // // Dispatch action creator using store.dispatch()
        // // - store.dispatch() returns a promise
        // // - check state in .then() callback
        // // store.dispatch(signIn(user))
        // //     .then(() => {
        // //         const newState = store.getState();
        // //         expect(newState.auth).toBe(user)
        // //     })
        // store.dispatch(signIn({}));
        // expect(store.getActions()).toEqual(expectedAction)
    });

    test('dispatches setError action when user sign in fails', () => {
        const user = {
            email: 'email',
            password: 'password'
        }

        const errorMessage = {
            message: 'Something went wrong!'
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith(mockError(errorMessage));
        });

        const expected = setError(errorMessage)

        store.dispatch(signIn(user))
            .then(() => {
                const actionsCalled = store.getActions();
                expected(actionsCalled).toEqual(expected);
            });
    });
});
