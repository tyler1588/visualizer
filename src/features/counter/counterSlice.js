import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	left: 0,
	right: 1,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		incrementLeft: (state) => {
			state.left += 1;
		},
		resetLeft: (state) => {
			state.left = 0;
		},
		incrementRight: (state) => {
			state.right += 1;
		},
		setRight: (state, action) => {
			state.right = action.payload;
		},
		resetRight: (state) => {
			state.right = 1;
		},
	},
});

export const {
	incrementLeft,
	resetLeft,
	incrementRight,
	resetRight,
	setRight,
} = counterSlice.actions;
export default counterSlice.reducer;
