import { useState } from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const IsEvenAPI = () => {
	const [showJson, setShowJson] = useState(false);
	const [isEvenData, setIsEvenData] = useState(null);

	return (
		<div className="w-full flex flex-col p-4 gap-2 rounded-md bg-zinc-200 dark:bg-zinc-800">
			<h1 className="text-2xl font-serif">Evenity-Checker</h1>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4 relative">
					<input
						type="text"
						pattern="\d*"
						className="w-full h-[40px] bg-transparent border-b border-black dark:border-white focus:outline-none font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
						onChange={(e) => {
							setIsEvenData(null);
							fetch("https://api.isevenapi.xyz/api/iseven/" + e.target.value + "/")
								.then((response) => response.json())
								.then((data) => {
									setIsEvenData(data);
								});
						}}
						placeholder={0}
						maxLength={6}
					/>
					{isEvenData &&
						(isEvenData.iseven ? (
							<DotLottieReact
								src="https://lottie.host/f737c7e3-ab6d-4fa3-995f-b40f2fe0f9ca/76od4EWTXs.lottie"
								className="absolute top-[-5px] right-[-8px]"
								width={50}
								height={50}
								autoplay
							/>
						) : (
							<DotLottieReact
								src="https://lottie.host/07d282a9-f369-46f1-a8e2-63e95b9bf973/wdy0povr0p.lottie"
								className="absolute top-[-5px] right-[-8px]"
								width={50}
								height={50}
								autoplay
							/>
						))}
				</div>
			</div>
			<div className="relative flex flex-col items-center gap-2">
				<input
					className="checkbox"
					type="checkbox"
					id="checkbox-isEven"
					onClick={() => setShowJson(!showJson)}
				/>
				<label
					htmlFor="checkbox-isEven"
					className="switch select-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.25"
						strokeLinejoin="round"
						strokeLinecap="round"
						className="lucide lucide-file-json"
					>
						<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
						<path d="M14 2v4a2 2 0 0 0 2 2h4" />
						<path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
						<path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
					</svg>
				</label>
				{showJson && <div>{isEvenData ? <p>{JSON.stringify(isEvenData, null, 2)}</p> : <p>There is currently no JSON</p>}</div>}
			</div>
		</div>
	);
};

export default IsEvenAPI;
