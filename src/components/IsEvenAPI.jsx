import PropTypes from "prop-types";
import { useState } from "react";

import JSONDisplay from "./JSONDisplay";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const IsEvenAPI = () => {
	const [isEvenData, setIsEvenData] = useState(null);

	return (
		<div>
			<div className="w-full flex flex-col p-4 gap-2 rounded-md bg-zinc-200 dark:bg-zinc-800">
				<h1 className="text-2xl font-serif">Is Number Even?</h1>
				<div className="flex flex-col gap-4">
					<div className="flex gap-4 relative">
						<input
							type="text"
							pattern="\d*"
							className="w-full h-[50px] bg-transparent border-b border-black dark:border-white focus:outline-none font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
									src="https://lottie.host/3e2eddff-394f-4dcb-bb64-bf86b0bdddab/XA80rDoTlh.lottie"
									className="absolute top-[-12px] right-[-18px]"
									width={60}
									height={60}
									autoplay
								/>
							) : (
								<DotLottieReact
									src="https://lottie.host/79e90b74-d229-4212-bf41-3c482139cfeb/HCvRuunM1q.lottie"
									className="absolute top-0 right-0"
									width={50}
									height={50}
									autoplay
								/>
							))}
					</div>
				</div>
				<JSONDisplay JSONcontent={isEvenData}></JSONDisplay>
			</div>
		</div>
	);
};

IsEvenAPI.propTypes = {
	children: PropTypes.node,
};

export default IsEvenAPI;
