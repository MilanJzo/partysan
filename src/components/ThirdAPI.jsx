import PropTypes from "prop-types";

const ThirdAPI = () => {
	return (
		<div className="w-full h-full col-span-2 flex flex-col p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
			<h1 className="text-2xl font-serif">Coming soon</h1>
		</div>
	);
};

ThirdAPI.propTypes = {
	children: PropTypes.node,
};

export default ThirdAPI;
