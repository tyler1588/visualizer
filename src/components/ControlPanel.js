import { useDispatch, useSelector } from 'react-redux';
import {
	resetLeft,
	resetRight,
	resetSwapCount,
	resetMin
} from '../features/counter/counterSlice';
import { generateRandArray } from '../features/randArray/randArraySlice';
import { setFalse, alternate, setAlgorithm } from '../features/runState/runStateSlice';
import { setSpeed, resetSpeed } from '../features/runState/runStateSlice';
import './Slider.css';
import Button from './Button';

const ControlPanel = ( {algorithm}) => {
	const dispatch = useDispatch();

	const runState = useSelector((state) => state.runState.value);
	const speedState = useSelector((state) => state.runState.speed);

	const handleClick = (type) => {
		if (type === 'toggle') {
			dispatch(setAlgorithm(algorithm))
			dispatch(alternate());
		} else {
			dispatch(setFalse());
			dispatch(resetLeft());
			dispatch(resetRight());
			dispatch(generateRandArray());
			dispatch(resetSpeed());
			dispatch(resetSwapCount());
        	dispatch(resetMin());
		}
	};

	return (
		<div className='controlPanel'>
			<Button
				type='toggle'
				text={runState ? 'Pause' : 'Start'}
				runState={runState}
				handleClick={handleClick}
			/>
			<Button
				type='reset'
				text={'Reset'}
				runState={runState}
				handleClick={handleClick}
			/>

			<div
				className='slideContainer'
				style={{ opacity: runState ? '25%' : '100%' }}
			>
				<p>Speed</p>
				<input
					type='range'
					min='0'
					max='250'
					step='10'
					value={speedState}
					onChange={(event) => dispatch(setSpeed(event.target.value))}
					className='slider'
					id='myRange'
					disabled={runState ? true : false}
				></input>
			</div>
		</div>
	);
};

export default ControlPanel;
