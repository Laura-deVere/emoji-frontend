import axios from '../apis/user';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {
    ERRORS,
    SET_CURRENT_USER
} from './types';

export const signUp = (userData) => async (dispatch) => {

    const options = {
        method: 'POST',
        url: '/signup',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            fname: userData.firstName,
            lname: userData.lastName,
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.confirmPassword
        }
    }

    return await axios(options)
        .then((res) => {
            // return a success response and redirect to login
            console.log(res);
            return true;
        })
        .catch((err) => {
            ///dispatch error action
            dispatch({
                type: ERRORS,
                payload: err
            })
            return false;
        });
}

export const signIn = (user) => async (dispatch) => {
    console.log(user)
    const options = {
        method: 'POST',
        url: '/signin',
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email: user.email,
            password: user.password
        }
    }

    return await axios(options)
        .then(res => {

            const { token } = res.data;
            localStorage.setItem('jwtToken', token);

            // Set token to Auth header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);
            console.log(res);
            // Dispatch set user action
            dispatch(setUser(decoded));

        })
        .catch(err => {
            setError(err)
        });
}

export const setError = (err) => {
    return {
        type: ERRORS,
        payload: err
    }
}

export const setUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}
