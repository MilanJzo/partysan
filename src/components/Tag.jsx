import PropTypes from "prop-types";

const Tag = ({ text, action, remove, highlight }) => {
	return (
		<button
			onClick={action}
			className={
				"w-fit h-fit flex gap-2 px-3 py-1 rounded-md text-nowrap hover:bg-zin-400 dark:hover:bg-zinc-600 " +
				(highlight ? " bg-zinc-400 dark:bg-zinc-600" : " bg-zinc-300 dark:bg-[#353535]")
			}
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

Tag.propTypes = {
	action: PropTypes.func,
	text: PropTypes.string,
	remove: PropTypes.bool,
	highlight: PropTypes.bool,
};

export default Tag;
