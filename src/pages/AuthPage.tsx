import React from 'react';
import { useSelector } from 'react-redux';
import SignIn from '../components/authpage/SignIn';
import SignUp from '../components/authpage/SignUp';
import { RootState } from '../store';
import './AuthPage.css';

const AuthPage : React.FC = (props) => {
    
    const isSignUpPage = useSelector((state: RootState) => state.authPageLoader.page);

    return (
        <div className = "flex h-screen w-full bg-auth-image bg-cover bg-center">
            {isSignUpPage ? <SignIn /> : <SignUp />}
        </div>
    );
}

export default AuthPage;