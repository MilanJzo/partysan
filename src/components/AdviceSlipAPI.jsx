import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const AdviceSlipAPI = () => {
	const [showJson, setShowJson] = useState(false);
	const [adviceSlipData, setAdviceSlipData] = useState(null);

	const fetchAdvice = () => {
		const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setAdviceSlipData(data));
	};

	useEffect(() => {
		fetchAdvice();
	}, []);

	return (
		<div className="w-full h-full flex flex-col p-4 gap-4 items-center rounded-md relative bg-zinc-200 dark:bg-zinc-800">
			<h1 className="text-2xl font-serif">Important Advice</h1>
			{adviceSlipData ? <p>{adviceSlipData.slip.advice}</p> : <p>loading advice ...</p>}
			<div className="h-fit w-fit flex gap-2">
				<button
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
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-refresh-ccw"
					>
						<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
						<path d="M3 3v5h5" />
						<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
						<path d="M16 16h5v5" />
					</svg>
				</button>
				<div className="relative">
					<input
						className="checkbox"
						type="checkbox"
						id="checkbox-slips"
						onClick={() => setShowJson(!showJson)}
					/>
					<label
						htmlFor="checkbox-slips"
						className="switch select-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-file-json"
						>
							<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
							<path d="M14 2v4a2 2 0 0 0 2 2h4" />
							<path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
							<path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
						</svg>
					</label>
				</div>
			</div>
			{showJson && <div>{adviceSlipData ? <p>{JSON.stringify(adviceSlipData)}</p> : <p>There is currently no JSON</p>}</div>}
		</div>
	);
};

AdviceSlipAPI.propTypes = {
	children: PropTypes.node,
};

export default AdviceSlipAPI;
