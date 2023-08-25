import Navbar from './components/Navbar';
import './App.css';
function App() {
	const getRandomInt = (max) => Math.floor(Math.random() * max - 5) + 5;
	const displayBars = (numBars) => {
		const barValues = Array.from({ length: numBars }, () => getRandomInt(100));
		console.log(barValues);
		return barValues.map((value, index) => (
			<div
				className='bar'
				key={index}
				style={{
					height: `${value}%`,
					width: '1rem',
					backgroundColor: 'black',
					marginTop: 'auto',
					marginLeft: '1px',
					marginRight: '1px',
				}}
			></div>
		));
	};

	return (
		<div className='App'>
			<Navbar />
			<div className='placeholder'>{displayBars(100)}</div>
		</div>
	);
}

export default App;
