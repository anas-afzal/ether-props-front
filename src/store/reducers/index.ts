import { combineReducers } from "redux";
import isAuth from './auth';

export const allReducers = combineReducers({
    isAuth
});

export type RootState = ReturnType<typeof allReducers>;

