import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ThirdAPI = () => {
	const [hotBoardgames, setHotBoardgames] = useState(null);

	const fetchHotGames = () => {
		console.log(new Date().getDate());
		const url = `https://tradestie.com/api/v1/apps/reddit`;
		fetch(url).then((response) => setHotBoardgames({ games: response.data }));
	};

	useEffect(() => {
		fetchHotGames();
	}, []);

	return (
		<div className="w-full h-full span-2 flex flex-col p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
			<h1 className="text-2xl font-serif">Coming soon</h1>
		</div>
	);
};

ThirdAPI.propTypes = {
	children: PropTypes.node,
};

export default ThirdAPI;
