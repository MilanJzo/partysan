import PropTypes from "prop-types";

const Button = ({ action, children, style, danger, disabled }) => {
	let classes = "px-2 py-1 rounded-md font-serif";
	if (danger) {
		classes += " bg-red-500 dark:bg-red-800 ";
	} else {
		classes += " bg-zinc-400 dark:bg-gray-600 ";
	}
	classes += style;

	return (
		<button
			className={classes}
			onClick={action}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	action: PropTypes.func,
	style: PropTypes.string,
	danger: PropTypes.bool,
	disabled: PropTypes.bool,
	children: PropTypes.node,
};

export default Button;
