import { Link } from "react-router";
import useAppstate from "../ zuSTATE/appstate";

function Navigation() {
	const user = useAppstate((state) => state.user);

	return (
		<div className="fixed top-0 right-0 w-full px-10 py-4 bg-white dark:bg-zinc-900 z-10">
			<div className="w-full flex justify-between items-center p-4 rounded-md bg-gradient-to-r from-slate-700 to-slate-800 text-white">
				<div className="flex items-baseline gap-4 font-bold text-xl">
					<Link
						to="/"
						className={"text-3xl font-serif py-1 px-4 rounded-md hover:bg-slate-800"}
					>
						Partysan
					</Link>
					<Link
						to="/events"
						className="py-1 px-4 rounded-md hover:bg-slate-800"
					>
						Events
					</Link>
					<Link
						to="/info"
						className="py-1 px-4 rounded-md hover:bg-slate-800"
					>
						Info
					</Link>
				</div>

				<Link
					to="/profile"
					className="flex items-end gap-2"
				>
					<p>{user}</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.25"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-circle-user-round"
					>
						<path d="M18 20a6 6 0 0 0-12 0" />
						<circle
							cx="12"
							cy="10"
							r="4"
						/>
						<circle
							cx="12"
							cy="12"
							r="10"
						/>
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default Navigation;
