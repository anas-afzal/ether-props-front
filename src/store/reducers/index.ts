import { combineReducers } from "redux";
import isAuth from './auth';
import authPageLoader from './authPageLoader';
import register from './register';

export const allReducers = combineReducers({
    isAuth, authPageLoader, register
});

export type RootState = ReturnType<typeof allReducers>;

