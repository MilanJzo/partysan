import { Link } from "react-router";

function Navigation() {
	return (
		<div className="w-full flex justify-between items-center px-20 py-4">
			<div className="flex gap-10 font-bold text-xl">
				<Link to="/">Home</Link>
				<Link to="/events">Events</Link>
				<Link to="/info">Info</Link>
			</div>

			<Link to="/profile">
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
	);
}

export default Navigation;
