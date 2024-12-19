import PropTypes from "prop-types";

const Button = ({ action, text }) => {
	return (
		<button
			className="px-4 py-2 dark:text-white dark:bg-gray-600 rounded-md font-serif"
			onClick={action}
		>
			{text}
		</button>
	);
};

Button.propTypes = {
	action: PropTypes.func,
	text: PropTypes.string,
};

export default Button;
