import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	resetLeft,
	incrementLeft,
	resetRight,
	incrementRight,
	setRight,
} from './features/counter/counterSlice';

import Navbar from './components/Navbar';
import Button from './components/Button';
import './App.css';
import { useState, useEffect, useCallback } from 'react';

function App() {
	const dispatch = useDispatch();
	const left = useSelector((state) => state.counter.left);
	const right = useSelector((state) => state.counter.right);

	const getRandomInt = (max) => Math.floor(Math.random() * max) + 25;

	const [randArray, setRandArray] = useState([]);
	const [runState, setRunState] = useState(false);

	useEffect(() => {
		setRandArray(Array.from({ length: 50 }, () => getRandomInt(75)));
	}, []);

	const handleClick = (type) => {
		if (type === 'toggle') {
			setRunState(!runState);
		} else {
			setRunState(false);
			dispatch(resetLeft());
			dispatch(resetRight());
			setRandArray(Array.from({ length: 50 }, () => getRandomInt(75)));
		}
	};

	const bubbleSort = useCallback(() => {
		let tempArray = randArray;

		if (runState && left < tempArray.length - 1) {
			if (tempArray[left] > tempArray[right]) {
				let temp = tempArray[left];
				tempArray[left] = tempArray[right];
				tempArray[right] = temp;
				setRandArray(tempArray);
			}
			if (right === tempArray.length - 1) {
				dispatch(incrementLeft());
				dispatch(setRight(left + 1));
			} else {
				dispatch(incrementRight());
			}
		} else if (runState) {
			setRunState(false);
		}
	}, [left, right, randArray, runState, dispatch]);

	useEffect(() => {
		setTimeout(() => {
			bubbleSort();
		}, 1);
	}, [bubbleSort]);

	const displayBars = () => {
		return randArray.map((value, index) => (
			<div
				className='bar'
				key={index}
				style={{
					height: `${value}%`,
					width: '2%',
					backgroundColor:
						index === left || index === right ? 'green' : 'black',
					marginTop: 'auto',
					marginLeft: '1px',
					marginRight: '1px',
					borderRadius: '10px',
				}}
			></div>
		));
	};

	return (
		<div className='App'>
			<Navbar />
			<div className='control-buttons'>
				<Button
					type='toggle'
					text={runState ? 'Stop' : 'Start'}
					runState={runState}
					handleClick={handleClick}
				/>
				<Button
					type='reset'
					text={'Reset'}
					runState={runState}
					handleClick={handleClick}
				/>
			</div>
			<div className='placeholder'>{displayBars()}</div>
		</div>
	);
}

export default App;
