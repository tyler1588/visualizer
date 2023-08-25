import './App.css';
import Navbar from './components/Navbar';
import DisplayBars from './components/DisplayBars';
import ControlPanel from './components/ControlPanel';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<ControlPanel />
			<DisplayBars />
		</div>
	);
}

export default App;
