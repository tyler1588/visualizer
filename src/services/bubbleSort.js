import { useCallback } from 'react';

const bubbleSort = useCallback(
	({ randArray, setRandArray, i, j, runState }) => {
		let tempArray = randArray;

		if (runState && i < tempArray.length - 1) {
			if (tempArray[i] > tempArray[j]) {
				let temp = tempArray[i];
				tempArray[i] = tempArray[j];
				tempArray[j] = temp;
				setRandArray(tempArray);
			}
			if (j === tempArray.length - 1) {
				setI(i + 1);
				setJ(i + 2);
			} else {
				setJ(j + 1);
			}
		}
	},
	[i, j, randArray, runState]
);

export default bubbleSort;
