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
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.left += 1;
		},
		resetLeft: (state) => {
			state.left = 0;
		},
		incrementRight: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
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

// Action creators are generated for each case reducer function
export const {
	incrementLeft,
	resetLeft,
	incrementRight,
	resetRight,
	setRight,
} = counterSlice.actions;

export default counterSlice.reducer;
