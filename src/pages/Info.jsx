import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";

function Info() {
	const [numToCheck, setNumToCheck] = useState(0);
	const [isEvenData, setIsEvenData] = useState(null);

	return (
		<div className="w-full h-full p-10 pt-[124px] flex flex-col gap-4 items-center text-black dark:text-white">
			<div>
				<div className="p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
					<h1>Is Number Even?</h1>
					<div className="flex gap-4 items-center">
						<div className="flex gap-4 items-center">
							<input
								type="number"
								className="w-full bg-transparent border-b border-black dark:border-white focus:outline-none font-bold"
								onChange={(e) => {
									setNumToCheck(e.target.value);
									setIsEvenData(null);
								}}
							/>
							<button
								onClick={() => {
									fetch("https://api.isevenapi.xyz/api/iseven/" + numToCheck + "/")
										.then((response) => response.json())
										.then((data) => {
											setIsEvenData(data);
										});
								}}
							>
								check
							</button>
						</div>
						{isEvenData &&
							(isEvenData.iseven ? (
								<DotLottieReact
									src="https://lottie.host/ecf4c0d6-d105-44ca-9b94-59aa5bdb8372/QjubNA52G5.lottie"
									className="w-[150px] h-[75px]"
									autoplay
								/>
							) : (
								<DotLottieReact
									src="https://lottie.host/5620609b-b34c-40cb-8587-3881f3c2a69e/n7OoKQ4MjJ.lottie"
									className="w-[100px] h-[50px]"
									autoplay
								/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Info;
