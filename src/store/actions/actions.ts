import * as api from '../../api';

export const signIn = (email: string, password: string) => {
    return async (dispatch: (arg0: { type: string; payload: void; }) => void) => {
        try {
            const data = await api.authSignIn(email, password);
            dispatch({type: "SIGN_IN", payload: data})
        } catch (error) {
            console.log(error.message);
        }
    }
};

export const signUp = (name: string, email: string, password: string) => {
    return async (dispatch: (arg0: { type: string; payload: void; }) => void) => {
        try {
            const data = await api.authRegister(name, email, password);
            console.log(data);
            dispatch({type: "REGISTER", payload: data});
        } catch (error) {
            console.log(error.message);
        };
    }
}


export const signOut = () => ({
    type: "SIGN_OUT"
});

export const signInPage = () => ({
    type: "SIGNIN_PAGE"
});

export const signUpPage = () => ({
    type: "SIGNUP_PAGE"
});

function dispatch(arg0: { type: string; payload: void; }) {
    throw new Error('Function not implemented.');
}

