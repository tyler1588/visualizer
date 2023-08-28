import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
	speed: 0,
	algorithm: ''
};

export const runStateSlice = createSlice({
	name: 'runState',
	initialState,
	reducers: {
		setFalse: (state) => {
			state.value = false;
		},
		alternate: (state) => {
			state.value = !state.value;
		},
		setSpeed: (state, action) => {
			state.speed = action.payload;
		},
		resetSpeed: (state) => {
			state.speed = 0;
		},
		setAlgorithm: (state, action) => {
			state.algorithm = action.payload
		},
		resetAlgorithm: (state) => {
			state.algorithm = ''
		}
	},
});

export const { setFalse, alternate, setSpeed, resetSpeed, setAlgorithm, resetAlgorithm } =
	runStateSlice.actions;
export default runStateSlice.reducer;
