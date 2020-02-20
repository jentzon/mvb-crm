import { LOGIN_USER, LOGOUT_USER, RESTORE_AUTH } from './actionTypes';

export const loginAction = user => ({
    type: LOGIN_USER,
    payload: user,
});

export const logoutAction = () => ({
    type: LOGOUT_USER,
});

export const restoreAuthAction = authState => ({
    type: RESTORE_AUTH,
    payload: authState,
});

export const login = loginDetails => {
    return async dispatch => {
        try {
            dispatch(logoutAction());
            const result = '';
            dispatch(loginAction(result));
        } catch (e) {
            dispatch(logoutAction());
        }
    };
};

export const signUp = signUpDetails => {
    return async dispatch => {
        try {
            dispatch(logoutAction());
            const result = '';
            dispatch(loginAction(result));
        } catch (e) {
            dispatch(logoutAction());
        }
    };
};

export const logout = () => {
    return async dispatch => {
        dispatch(logoutAction());
    };
};

export const restore = savedState => {
    return dispatch => {
        dispatch(restoreAuthAction(savedState));
    };
};
