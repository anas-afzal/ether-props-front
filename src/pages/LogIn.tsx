import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions/actions';

const SignIn : React.FC = () => {

    const dispatch = useDispatch();

    const signInHandler = () => {
        dispatch(signIn());
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick = { signInHandler } >Sign In</button>
        </div>
    );
}

export default SignIn;