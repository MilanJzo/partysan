import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AdviceSlipAPI = () => {
	const [adviceSlipData, setAdviceSlipData] = useState(null);

	const fetchAdvice = () => {
		const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setAdviceSlipData(data));
	};

	useEffect(() => {
		console.log("initial fetch");
		fetchAdvice();
		console.log("initial fetch done");
	}, []);

	return (
		<div className="w-full h-full flex flex-col p-4 justify-center items-center rounded-md relative bg-zinc-200 dark:bg-zinc-800">
			{adviceSlipData ? <p>{adviceSlipData.slip.advice}</p> : <p>loading advice ...</p>}
			<button
				className="absolute bottom-4 right-auto"
				onClick={() => {
					setAdviceSlipData(null);
					fetchAdvice();
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-refresh-cw"
				>
					<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
					<path d="M21 3v5h-5" />
					<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
					<path d="M8 16H3v5" />
				</svg>
			</button>
		</div>
	);
};

AdviceSlipAPI.propTypes = {
	children: PropTypes.node,
};

export default AdviceSlipAPI;
