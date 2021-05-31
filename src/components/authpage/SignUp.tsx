import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInPage } from '../../store/actions/actions';

const SignUp : React.FC = () => {

    const dispatch = useDispatch();

    const signInPageHandler = () => {
        dispatch(signInPage());
    };

    const signUpHandler = () => {
        
    };

    return (
        <div className = "flex h-screen w-full bg-auth-image bg-cover bg-center">
            <div className = "flex bg-white sm:h-3/4 sm:w-2/3 mx-auto my-auto rounded-xl shadow-2xl">
                <div className = "flex flex-col bg-blue-300 rounded-l-xl w-2/5">
                    <Link to = "/"><img src="/assets/ether-props-logo.svg" alt="" className = "w-52 h-16 mx-auto mt-6"/></Link>
                    <div className = "flex flex-col mx-auto my-auto items-center">
                        <h1 className = "text-5xl text-white font-medium">Welcome Back!</h1>
                        <p className = "text-white my-8">Sign in to start property hunting</p>
                        <button onClick = {signInPageHandler} className = "border border-white w-40 rounded-full py-3 text-white transition transform duration-500 ease-in-out hover:-translate-y-2">SIGN IN</button>
                    </div>
                </div>
                <div className = "flex flex-col w-3/5 my-auto">
                    <h1 className = "text-4xl text-blue-400 mx-auto mb-12 font-medium">Create an account</h1>
                    <div className = "grid grid-col-1 mx-auto w-2/3 space-y-5">
                        <input type = "text" placeholder = "Name" className = "h-12 px-3 bg-gray-100" />
                        <input type = "email" placeholder = "Email" className = "h-12 px-3 bg-gray-100"/>
                        <input type = "password" placeholder = "Password" className = "h-12 px-3 bg-gray-100" />
                    </div>
                    <button onClick = {signUpHandler} className = "bg-blue-400 w-1/4 rounded-full mx-auto mt-8 py-3 text-white shadow hover:bg-blue-300">SIGN UP</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;