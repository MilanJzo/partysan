import PropTypes from "prop-types";

const Button = ({ text, action, remove }) => {
	return (
		<button
			onClick={action}
			className="w-fit h-fit flex gap-2 px-3 py-1 rounded-md bg-zinc-300 dark:bg-zinc-700 text-nowrap"
		>
			{text}{" "}
			{remove ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-x"
				>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			) : (
				<></>
			)}
		</button>
	);
};

Button.propTypes = {
	action: PropTypes.func,
	text: PropTypes.string,
	remove: PropTypes.bool,
};

export default Button;
