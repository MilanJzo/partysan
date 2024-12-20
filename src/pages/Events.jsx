import useAppstate from "../ zuSTATE/appstate";

import { useEffect } from "react";
import L from "leaflet";
// import "../../node_modules/leaflet/dist/leaflet.css";

import Tag from "../components/Tag";

function Events() {
	const userTags = useAppstate((state) => state.userTags);

	useEffect(() => {
		const map = L.map("map").setView([51.505, -0.09], 13);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		return () => {
			map.remove();
		};
	}, []);

	return (
		<div className="w-full page-content-h p-10 flex flex-col gap-4 items-center text-black dark:text-white font-serif">
			<div className="w-full h-full p-4 rounded-md bg-zinc-800">
				<div className="w-full pb-3 flex justify-center gap-2 overflow-x-scroll">
					{userTags.map((tag, idx) => {
						return (
							<Tag
								key={idx}
								text={tag}
							></Tag>
						);
					})}
				</div>

				<div id="map"></div>
			</div>
		</div>
	);
}

export default Events;
