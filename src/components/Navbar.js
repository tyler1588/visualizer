import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='topnav'>
			<NavLink
				to='/visualizer/bubble-sort'
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Bubble Sort
			</NavLink>
			<NavLink
				to='/visualizer/selection-sort'
				className={({ isActive = {} }) => (isActive ? 'active' : 'inactive')}
			>
				Selection Sort
			</NavLink>
		</div>
	);
};

export default Navbar;
