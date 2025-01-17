import { Link, useLocation } from "react-router";
import useAppstate from "../ zuSTATE/appstate";

function Navigation() {
	const user = useAppstate((state) => state.user);
	const location = useLocation();

	return (
		<div className="md:fixed top-0 right-0 w-full px-10 py-4 bg-white dark:bg-zinc-900 z-10">
			<div className="w-full min-h-[80px] flex justify-between items-start  p-4 rounded-md bg-gradient-to-r from-slate-700 to-slate-800 text-white">
				<div className="min-h-[46px] flex flex-col md:flex-row items-baseline gap-4 font-bold text-xl">
					<Link
						to="/"
						className={
							"text-3xl font-serif py-1 px-2 hover:border-l-2 md:hover:border-b-2 md:hover:border-l-0 hover:border-white" +
							(location.pathname === "/" ? " border-l-2 md:border-l-0 md:border-b-2 border-white" : "")
						}
					>
						Partysan
					</Link>
					<Link
						to="/events"
						className={
							"py-1 px-2 hover:border-l-2 md:hover:border-b-2 md:hover:border-l-0 hover:border-white" +
							(location.pathname === "/events" ? " border-l-2 md:border-l-0 md:border-b-2 border-white" : "")
						}
					>
						Events
					</Link>
					<Link
						to="/info"
						className={
							"py-1 px-2 hover:border-l-2 md:hover:border-b-2 md:hover:border-l-0 hover:border-white" +
							(location.pathname === "/info" ? " border-l-2 md:border-l-0 md:border-b-2 border-white" : "")
						}
					>
						Info
					</Link>
					<Link
						to="/about"
						className={
							"py-1 px-1 text-sm hover:border-l-2 md:hover:border-b-2 md:hover:border-l-0 hover:border-white" +
							(location.pathname === "/about" ? " border-l-2 md:border-l-0 md:border-b-2 border-white" : "")
						}
					>
						About
					</Link>
				</div>

				<Link
					to="/profile"
					className={
						"py-1 px-2 w-fit h-[44px] flex items-end justify-center gap-2 hover:border-r-2 md:hover:border-r-0 md:hover:border-b-2 md:hover:border-l-0 hover:border-white" +
						(location.pathname === "/profile" ? " border-r-2 md:border-r-0 md:border-b-2 border-white" : "")
					}
				>
					<p className="w-fit max-w-[200px] h-full flex items-center text-nowrap overflow-hidden">{user}</p>
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
						className="lucide lucide-circle-user-round h-[32px] w-[32px]"
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
