import { createSlice } from '@reduxjs/toolkit';

const getRandomInt = (max) => Math.floor(Math.random() * max) + 25;
const getRandArray = () => Array.from({ length: 50 }, () => getRandomInt(75));

const initialState = {
	value: getRandArray(),
};

export const randArraySlice = createSlice({
	name: 'randArray',
	initialState,
	reducers: {
		generateRandArray: (state) => {
			state.value = getRandArray();
		},
		setRandArray: (state, action) => {
			state.value = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { generateRandArray, setRandArray } = randArraySlice.actions;

export default randArraySlice.reducer;
