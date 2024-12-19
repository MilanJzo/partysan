import Navigation from "../components/Navigation";

import { Outlet } from "react-router";

function PageLayout() {
	return (
		<div className="w-full h-screen flex flex-col items-center text-black dark:text-white font-serif bg-white dark:bg-zinc-900">
			<Navigation></Navigation>
			<Outlet></Outlet>
		</div>
	);
}

export default PageLayout;
