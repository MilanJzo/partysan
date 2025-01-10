import PropTypes from "prop-types";
import { useState } from "react";

const ThirdAPI = ({ JSONcontent }) => {
	const [showJson, setShowJson] = useState(false);

	return (
		<div className="flex flex-col justify-end gap-2">
			<div className="relative">
				<input
					type="checkbox"
					id="checkbox"
					onClick={() => setShowJson(!showJson)}
				/>
				<label
					htmlFor="checkbox"
					className="switch select-none"
				>
					<p className="h-[18px]">JSON</p>
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
			</div>
			{showJson && <div>{JSONcontent ? <p>{JSON.stringify(JSONcontent, null, 2)}</p> : <p>There is currently no JSON</p>}</div>}
		</div>
	);
};

ThirdAPI.propTypes = {
	children: PropTypes.node,
	JSONcontent: PropTypes.object,
};

export default ThirdAPI;
