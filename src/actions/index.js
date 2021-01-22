import axios from '../apis/user';
import { ERRORS } from './types';
// import {
//     ERRORS,
//     SET_CURRENT_USER
// } from './types';

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

}