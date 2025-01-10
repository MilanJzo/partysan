import { Link, useLocation } from "react-router";
import useAppstate from "../ zuSTATE/appstate";

function Navigation() {
	const user = useAppstate((state) => state.user);
	const location = useLocation();

	return (
		<div className="fixed top-0 right-0 w-full px-10 py-4 bg-white dark:bg-zinc-900 z-10">
			<div className="w-full flex justify-between items-center p-4 rounded-md bg-gradient-to-r from-slate-700 to-slate-800 text-white">
				<div className="flex items-baseline gap-4 font-bold text-xl">
					<Link
						to="/"
						className={
							"text-3xl font-serif py-1 px-4 hover:border-b-2 hover:border-white" + (location.pathname === "/" ? " border-b-2 border-white" : "")
						}
					>
						Partysan
					</Link>
					<Link
						to="/events"
						className={"py-1 px-4 hover:border-b-2 hover:border-white" + (location.pathname === "/events" ? " border-b-2 border-white" : "")}
					>
						Events
					</Link>
					<Link
						to="/info"
						className={"py-1 px-4 hover:border-b-2 hover:border-white" + (location.pathname === "/info" ? " border-b-2 border-white" : "")}
					>
						Info
					</Link>
				</div>

				<Link
					to="/profile"
					className={
						"py-1 px-4 min-w-fit flex items-end gap-2 hover:border-b-2 hover:border-white" +
						(location.pathname === "/profile" ? " border-b-2 border-white" : "")
					}
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
