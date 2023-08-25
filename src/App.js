import Navbar from './components/Navbar';
import './App.css';
import { useState, useEffect, useCallback } from 'react';

function App() {
	const getRandomInt = (max) => Math.floor(Math.random() * max) + 25;

	const [randArray, setRandArray] = useState([]);
	const [i, setI] = useState(0);
	const [j, setJ] = useState(1);
	const [runState, setRunState] = useState(false);

	useEffect(() => {
		setRandArray(Array.from({ length: 50 }, () => getRandomInt(75)));
	}, []);

	const handleClick = () => setRunState(!runState);
	const handleResetClick = () => {
		setRunState(false);
		setI(0);
		setJ(1);
		setRandArray(Array.from({ length: 50 }, () => getRandomInt(75)));
	};

	const bubbleSort = useCallback(() => {
		let tempArray = randArray;

		if (runState === true && i < tempArray.length - 1) {
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
	}, [i, j, randArray, runState]);

	useEffect(() => {
		setTimeout(() => {
			bubbleSort();
		}, 10);
	}, [i, j, randArray, bubbleSort]);

	const displayBars = () => {
		return randArray.map((value, index) => (
			<div
				className='bar'
				key={index}
				style={{
					height: `${value}%`,
					width: '2%',
					backgroundColor: index === i || index === j ? 'green' : 'black',
					marginTop: 'auto',
					marginLeft: '1px',
					marginRight: '1px',
				}}
			></div>
		));
	};

	return (
		<div className='App'>
			<Navbar
				runState={runState}
				handleClick={handleClick}
				handleResetClick={handleResetClick}
			/>
			<div className='placeholder'>{displayBars(100)}</div>
		</div>
	);
}

export default App;
