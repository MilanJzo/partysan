import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

function Info() {
	const [isEvenData, setIsEvenData] = useState(null);

	return (
		<div className="w-full h-full p-10 pt-[124px] flex flex-col gap-4 items-center text-black dark:text-white">
			<div>
				<div className="p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
					<h1 className="text-2xl font-serif">Is Number Even?</h1>
					<div className="flex gap-4 items-center justify-center h-[75px]">
						<div className="flex gap-4 relative">
							<input
								type="number"
								className="w-[200px] h-[50px] bg-transparent border-b border-black dark:border-white focus:outline-none font-bold [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
								onChange={(e) => {
									fetch("https://api.isevenapi.xyz/api/iseven/" + e.target.value + "/")
										.then((response) => response.json())
										.then((data) => {
											setIsEvenData(data);
										});
									setIsEvenData(null);
								}}
								placeholder={0}
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
				</div>
			</div>
		</div>
	);
}

export default Info;
