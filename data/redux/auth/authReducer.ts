import { LOGIN_USER, LOGOUT_USER, RESTORE_AUTH } from './actionTypes';

import { getCookie, setCookie, removeCookie } from '../../../helpers/cookie';

const emptyInitState = {
    isLoggedIn: false,
    user: {},
};

let initialState;
if (typeof localStorage !== 'undefined') {
    const authCookie = getCookie('auth', {});
    if (authCookie) {
        initialState = JSON.parse(decodeURIComponent(authCookie));
    } else {
        initialState = emptyInitState;
    }
} else {
    initialState = emptyInitState;
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_USER:
            removeCookie('auth');
            return {
                isLoggedIn: false,
            };

        case LOGIN_USER:
            const authObj = {
                isLoggedIn: true,
                user: action.payload,
            };
            setCookie('auth', authObj);
            return authObj;
        case RESTORE_AUTH:
            return {
                isLoggedIn: true,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export default authReducer;
