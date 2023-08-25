import './Button.css';

const Button = ({ type, text, runState, handleClick }) => {
	return (
		<button
			disabled={type === 'reset' ? runState : false}
			onClick={() => handleClick(type)}
			className='button-38'
			style={{ opacity: type === 'reset' && runState ? '25%' : '100%' }}
		>
			{text}
		</button>
	);
};
export default Button;
