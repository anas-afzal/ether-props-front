import { createStore } from 'redux';
import { allReducers, RootState } from './reducers';

export const store = createStore(allReducers);

export type { RootState };
