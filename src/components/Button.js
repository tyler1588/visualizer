import './Button.css';

const Button = ({ type, text, runState, handleClick }) => {
	return (
		<button
			disabled={type === 'reset' ? runState : false}
			onClick={() => handleClick(type)}
			className='button-38'
		>
			{text}
		</button>
	);
};
export default Button;
