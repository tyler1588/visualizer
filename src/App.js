import './App.css';
import Navbar from './components/Navbar';
import { 
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import AlgoPage from './components/AlgoPage';
import useBubbleSort from './hooks/useBubbleSort';
import useSelectionSort from './hooks/useSelectionSort';

const App = () => {
	useBubbleSort()
	useSelectionSort()
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/visualizer/' element={<AlgoPage algorithm={'bubbleSort'}/>}></Route>
					<Route path='/visualizer/bubble-sort/' element={<AlgoPage algorithm={'bubbleSort'}/>}></Route>
					<Route path='/visualizer/selection-sort/' element={<AlgoPage algorithm={'selectionSort'}/>}></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
