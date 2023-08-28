import { useDispatch, useSelector } from 'react-redux';
import { setRandArray } from '../features/randArray/randArraySlice';
import {
	incrementLeft,
	incrementRight,
	setMin,
    setRight,
} from '../features/counter/counterSlice';

import { setFalse } from '../features/runState/runStateSlice';

import { useEffect } from 'react';

const swap = (tempArray, left, currMin, dispatch) => {
    let temp = tempArray[left]
    tempArray[left] = tempArray[currMin]
    tempArray[currMin] = temp
    dispatch(setRandArray(tempArray));
    dispatch(incrementLeft())
    dispatch(setMin(left + 1))
    dispatch(setRight(left + 1))

}

const selectionSort = (randArray, left, right, runState, min, dispatch) => {
	let tempArray = randArray.slice();
    let currMin = min

	if (runState && right < tempArray.length) {
		if (tempArray[min] > tempArray[right]) {
            dispatch(setMin(right))
            currMin = right
		}
		if (right === tempArray.length - 1) {
            swap(tempArray, left, currMin, dispatch)
		}
        else {
            dispatch(incrementRight())
        }
	} else if (runState) {
		dispatch(setFalse());
	}
};

const useSelectionSort = () => {
	const dispatch = useDispatch();
	const left = useSelector((state) => state.counter.left);
	const right = useSelector((state) => state.counter.right);
	const min = useSelector((state) => state.counter.min);
	const randArray = useSelector((state) => state.randArray.value);
	const runState = useSelector((state) => state.runState.value);
	const speedState = useSelector((state) => state.runState.speed);
    const algorithm = useSelector((state) => state.runState.algorithm)

	useEffect(() => {
		setTimeout(() => {
            if (algorithm === 'selectionSort'){
                selectionSort(randArray, left, right, runState, min, dispatch);
            }            
		}, speedState);
	}, [dispatch, left, right, runState, randArray, min, speedState, algorithm]);
};

export default useSelectionSort;
