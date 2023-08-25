import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

export const runStateSlice = createSlice({
	name: 'runState',
	initialState,
	reducers: {
		setFalse: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = false;
		},
		alternate: (state) => {
			state.value = !state.value;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setFalse, alternate } = runStateSlice.actions;

export default runStateSlice.reducer;
