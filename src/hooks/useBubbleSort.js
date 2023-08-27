import { useDispatch, useSelector } from 'react-redux';
import { setRandArray } from '../features/randArray/randArraySlice';
import {
	incrementLeft,
	incrementRight,
	resetLeft,
	resetRight,
	incrementSwapCount,
} from '../features/counter/counterSlice';

import { setFalse } from '../features/runState/runStateSlice';

import { useEffect } from 'react';

const bubbleSort = (randArray, left, right, runState, swapCount, dispatch) => {
	let tempArray = randArray.slice();

	if (runState && right < tempArray.length - swapCount) {
		if (tempArray[left] > tempArray[right]) {
			const temp = tempArray[left];
			tempArray[left] = tempArray[right];
			tempArray[right] = temp;
			dispatch(setRandArray(tempArray));
		}
		if (right === tempArray.length - 1 - swapCount) {
			dispatch(resetLeft());
			dispatch(resetRight());
			dispatch(incrementSwapCount());
		} else if (swapCount !== tempArray.length) {
			dispatch(incrementLeft());
			dispatch(incrementRight());
		}
	} else if (runState) {
		dispatch(setFalse());
	}
};

const useBubbleSort = () => {
	const dispatch = useDispatch();
	const left = useSelector((state) => state.counter.left);
	const right = useSelector((state) => state.counter.right);
	const swapCount = useSelector((state) => state.counter.swapCount);
	const randArray = useSelector((state) => state.randArray.value);
	const runState = useSelector((state) => state.runState.value);
	const speedState = useSelector((state) => state.runState.speed);

	useEffect(() => {
		setTimeout(() => {
			bubbleSort(randArray, left, right, runState, swapCount, dispatch);
		}, speedState);
	}, [dispatch, left, right, runState, randArray, swapCount, speedState]);
	return randArray;
};

export default useBubbleSort;
