import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import randArrayReducer from '../features/randArray/randArraySlice';
import runStateReducer from '../features/runState/runStateSlice';

const store = configureStore({
	reducer: {
		counter: counterReducer,
		randArray: randArrayReducer,
		runState: runStateReducer,
	},
});

export default store;
