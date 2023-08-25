import { useDispatch, useSelector } from 'react-redux';
import { resetLeft, resetRight } from '../features/counter/counterSlice';
import { generateRandArray } from '../features/randArray/randArraySlice';
import { setFalse, alternate } from '../features/runState/runStateSlice';

import Button from './Button';

const ControlPanel = () => {
	const dispatch = useDispatch();

	const runState = useSelector((state) => state.runState.value);

	const handleClick = (type) => {
		if (type === 'toggle') {
			dispatch(alternate());
		} else {
			dispatch(setFalse());
			dispatch(resetLeft());
			dispatch(resetRight());
			dispatch(generateRandArray());
		}
	};

	return (
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
	);
};

export default ControlPanel;
