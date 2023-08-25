import './Navbar.css';

const Navbar = ({ runState, handleClick, handleResetClick }) => {
	return (
		<div className='topnav'>
			<a onClick={() => handleClick()} className='active' href='#home'>
				{runState === false ? 'Start' : 'Stop'}
			</a>
			<a onClick={() => handleResetClick()} href='#news'>
				Reset
			</a>
		</div>
	);
};

export default Navbar;
