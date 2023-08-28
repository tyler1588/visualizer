import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	left: 0,
	right: 1,
	swapCount: 0,
	min: 0
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
		incrementSwapCount: (state) => {
			state.swapCount += 1;
		},
		resetSwapCount: (state) => {
			state.swapCount = 0;
		},
		setMin: (state, action) => {
			state.min = action.payload;
		},
		resetMin: (state) => {
			state.min = 0
		}
	},
});

export const {
	incrementLeft,
	resetLeft,
	incrementRight,
	resetRight,
	setRight,
	incrementSwapCount,
	resetSwapCount,
	setMin,
	resetMin
} = counterSlice.actions;
export default counterSlice.reducer;
