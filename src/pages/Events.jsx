import useAppstate from "../ zuSTATE/appstate";

import "leaflet/dist/leaflet.css";

import Tag from "../components/Tag";

import eventData from "../../data/events.json";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Events() {
	const userTags = useAppstate((state) => state.userTags);

	const center = [50.941, 6.958]; // de Dömsche

	return (
		<div className="w-full page-content-h p-10 flex flex-col gap-4 items-center text-black dark:text-white font-serif">
			<div className="w-full h-full p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
				<div className="w-full h-[59px] pb-3 flex gap-2 overflow-x-scroll">
					{userTags.length > 0
						? userTags.map((tag, idx) => {
								return (
									<Tag
										key={idx}
										text={tag}
									></Tag>
								);
						  })
						: "You have no tags selected currently."}
				</div>

				<MapContainer
					center={center}
					zoom={15}
					scrollWheelZoom={false}
					className="w-full h-[calc(100%-59px)] rounded-md shadow-inner shadow-black"
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={center}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
}

export default Events;
