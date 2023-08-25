import { useDispatch, useSelector } from 'react-redux';
import { setRandArray } from '../features/randArray/randArraySlice';
import {
	incrementLeft,
	incrementRight,
	setRight,
} from '../features/counter/counterSlice';

import { setFalse } from '../features/runState/runStateSlice';

import { useEffect } from 'react';

const bubbleSort = (randArray, left, right, runState, dispatch) => {
	let tempArray = randArray.slice();

	if (runState && left < tempArray.length - 1) {
		if (tempArray[left] > tempArray[right]) {
			let temp = tempArray[left];
			tempArray[left] = tempArray[right];
			tempArray[right] = temp;
			dispatch(setRandArray(tempArray));
		}
		if (right === tempArray.length - 1) {
			dispatch(incrementLeft());
			dispatch(setRight(left + 1));
		} else {
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
	const randArray = useSelector((state) => state.randArray.value);
	const runState = useSelector((state) => state.runState.value);
	useEffect(() => {
		setTimeout(() => {
			bubbleSort(randArray, left, right, runState, dispatch);
		}, 10);
	}, [dispatch, left, right, runState, randArray]);
	return randArray;
};

export default useBubbleSort;
