import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { allReducers, RootState } from './reducers';

export const store = createStore(allReducers, applyMiddleware(thunkMiddleware));

export type { RootState };
