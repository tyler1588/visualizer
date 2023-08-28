import { useSelector } from 'react-redux';
import useReset from '../hooks/useReset';

const DisplayBars = () => {
	const left = useSelector((state) => state.counter.left);
	const right = useSelector((state) => state.counter.right);
	const randArray = useSelector((state) => state.randArray.value);
	useReset()

	const display = () => {
		return randArray.map((value, index) => (
			<div
				className='bar'
				key={index}
				style={{
					height: `${value}%`,
					backgroundColor:
						index === left || index === right
							? 'rgba(145, 180, 150, 1)'
							: '#333',
				}}
			></div>
		));
	};

	return (
	<div className='chart'>{display()}</div>)
};

export default DisplayBars;
