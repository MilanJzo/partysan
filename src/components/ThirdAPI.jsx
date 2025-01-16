import PropTypes from "prop-types";
import { useEffect } from "react";

const ThirdAPI = () => {
	const fetchAPIData = () => {
		// ....
	};

	useEffect(() => {
		fetchAPIData();
	}, []);

	return (
		<div className="w-full h-full span-2 flex flex-col items-center p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
			<h1 className="text-2xl font-serif">Coming Soon&trade; (aka never probably)</h1>
		</div>
	);
};

ThirdAPI.propTypes = {
	children: PropTypes.node,
};

export default ThirdAPI;
