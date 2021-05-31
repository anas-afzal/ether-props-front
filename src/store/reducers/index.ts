import { combineReducers } from "redux";
import isAuth from './auth';
import authPageLoader from './authPageLoader';

export const allReducers = combineReducers({
    isAuth, authPageLoader
});

export type RootState = ReturnType<typeof allReducers>;

