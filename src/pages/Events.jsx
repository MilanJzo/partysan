import "leaflet/dist/leaflet.css";

import useAppstate from "../ zuSTATE/appstate";

import eventData from "../../data/events.json";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useMemo } from "react";

import Button from "../components/Button";
import Tag from "../components/Tag";

function Events() {
	const userTags = useAppstate((state) => state.userTags);
	const userEvents = useAppstate((state) => state.userEvents);
	const addUserEvent = useAppstate((state) => state.addUserEvent);
	const removeUserEvent = useAppstate((state) => state.removeUserEvent);

	const [highlightedTags, setHighlightedTags] = useState([]);

	const filteredEvents = useMemo(() => {
		if (userTags.length <= 0) {
			return eventData.events;
		}

		if (highlightedTags.length <= 0) {
			return eventData.events.filter((event) => {
				return event.tags.some((tag) => userTags.includes(tag));
			});
		}

		return eventData.events.filter((event) => {
			return event.tags.some((tag) => highlightedTags.includes(tag));
		});
	}, [userTags, highlightedTags]);

	return (
		<div className="w-full h-full p-10 pt-[124px] flex flex-col gap-4 items-center text-black dark:text-white">
			<div className="w-full h-full p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
				<div className="w-full h-fit pb-3 flex gap-2 overflow-x-scroll">
					{userTags.length > 0
						? userTags.map((tag, idx) => {
								return (
									<Tag
										key={idx}
										text={tag}
										action={() => {
											if (highlightedTags.includes(tag)) {
												const newHighlightedTags = highlightedTags.filter((highlightedTag) => {
													return highlightedTag !== tag;
												});
												setHighlightedTags(newHighlightedTags);
											} else {
												const newHighlightedTags = [...highlightedTags, tag];
												setHighlightedTags(newHighlightedTags);
											}
										}}
										highlight={highlightedTags.includes(tag)}
									></Tag>
								);
						  })
						: "You have no tags selected currently."}
				</div>

				<MapContainer
					center={[50.941, 6.958]} // de dömsche
					zoom={13}
					scrollWheelZoom={true}
					className="w-full h-[calc(100%-2.75rem)] rounded-md dark:bg-black"
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{filteredEvents.map((event, idx) => {
						return (
							<Marker
								key={idx}
								position={[event.latlon[0], event.latlon[1]]}
							>
								<Popup className="marker-popup">
									<div className="flex flex-col gap-2 min-w-[250px] text-black dark:text-white p-0 m-0">
										<h2 className="rounded-md p-2 text-xl bg-zinc-300 dark:bg-zinc-700 font-serif">{event.title}</h2>
										<p
											style={{ margin: 0 }}
											className="rounded-md p-2 text-base bg-zinc-300 dark:bg-zinc-700"
										>
											{event.location}
										</p>
										<p
											style={{ margin: 0 }}
											className="rounded-md p-2 text-base bg-zinc-300 dark:bg-zinc-700"
										>
											{event.place}
										</p>
										<div className="rounded-md p-2 flex justify-between gap-2 bg-zinc-300 dark:bg-zinc-700">
											<p style={{ margin: 0 }}>{event.date}</p>
											<p style={{ margin: 0 }}>{event.price}</p>
										</div>
										<div className="w-full h-fit flex flex-wrap gap-2 max-h-[110px] overflow-y-scroll">
											{event.tags.map((tag, idx) => {
												if (userTags.includes(tag)) {
													return (
														<p
															key={idx}
															className="m-0 rounded-md px-2 py-1 bg-zinc-300 dark:bg-zinc-700"
															style={{ margin: 0 }}
														>
															{tag}
														</p>
													);
												}
												return null;
											})}
											{event.tags.map((tag, idx) => {
												if (!userTags.includes(tag)) {
													return (
														<p
															key={idx}
															className="m-0 rounded-md px-2 py-1 bg-[#dddddd] dark:bg-[#313131]"
															style={{ margin: 0 }}
														>
															{tag}
														</p>
													);
												}
												return null;
											})}
										</div>
										{userEvents.includes(event) ? (
											<Button
												danger
												action={() => {
													removeUserEvent(event);
												}}
											>
												Cancel Booking
											</Button>
										) : (
											<Button
												action={() => {
													addUserEvent(event);
												}}
											>
												Book this Event
											</Button>
										)}
									</div>
								</Popup>
							</Marker>
						);
					})}
				</MapContainer>
			</div>
		</div>
	);
}

export default Events;
