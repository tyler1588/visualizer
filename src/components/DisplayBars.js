import { useSelector } from 'react-redux';
import useBubbleSort from '../hooks/useBubbleSort';

const DisplayBars = () => {
	const left = useSelector((state) => state.counter.left);
	const right = useSelector((state) => state.counter.right);
	const randArray = useBubbleSort();

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
	return <div className='chart'>{display()}</div>;
};

export default DisplayBars;
