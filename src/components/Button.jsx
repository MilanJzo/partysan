import PropTypes from "prop-types";

const Button = ({ action, text, style }) => {
	return (
		<button
			className={"px-2 py-1 dark:text-white dark:bg-gray-600 rounded-md font-serif" + " " + style}
			onClick={action}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	action: PropTypes.func,
	text: PropTypes.string,
	style: PropTypes.string,
};

export default Button;
