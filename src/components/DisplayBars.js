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
					width: '2%',
					backgroundColor:
						index === left || index === right
							? 'rgba(145, 180, 150, 1)'
							: 'black',
					marginTop: 'auto',
					marginLeft: '1px',
					marginRight: '1px',
					borderTopLeftRadius: '1rem',
					borderTopRightRadius: '0.25rem',
				}}
			></div>
		));
	};
	return <div className='placeholder'>{display()}</div>;
};

export default DisplayBars;
