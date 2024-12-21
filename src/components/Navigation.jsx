import { Link } from "react-router";
import useAppstate from "../ zuSTATE/appstate";

function Navigation() {
	const user = useAppstate((state) => state.user);

	return (
		<div className="w-full px-10 pt-4">
			<div className="w-full flex justify-between items-center p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
				<div className="flex gap-10 font-bold text-xl">
					<Link to="/">Partysan</Link>
					<Link to="/events">Events</Link>
					<Link to="/info">Info</Link>
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
