import './App.css';
import Navbar from './components/Navbar';
import {
	HashRouter,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import AlgoPage from './components/AlgoPage';
import useBubbleSort from './hooks/useBubbleSort';
import useSelectionSort from './hooks/useSelectionSort';

const App = () => {
	useBubbleSort();
	useSelectionSort();
	return (
		<div className='App'>
			<HashRouter basename='/'>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Navigate to='/bubble-sort/' />}
					></Route>
					<Route
						path='/bubble-sort/'
						element={<AlgoPage algorithm={'bubbleSort'} />}
					></Route>
					<Route
						path='/selection-sort/'
						element={<AlgoPage algorithm={'selectionSort'} />}
					></Route>
				</Routes>
			</HashRouter>
		</div>
	);
};

export default App;
