import "leaflet/dist/leaflet.css";
import L from "leaflet";

import useAppstate from "../ zuSTATE/appstate";

import eventData from "../../data/events.json";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useMemo } from "react";

import Button from "../components/Button";
import Tag from "../components/Tag";

function parseEventDate(dateString) {
	const date = dateString.split(", ")[1].split(" | ")[0];
	const time = dateString.split(" | ")[1];
	const [day, month] = date.split(". ");
	const [hours, minutes] = time.split(":");
	const monthMap = {
		Jan: 0,
		Feb: 1,
		Mär: 2,
		Apr: 3,
		Mai: 4,
		Jun: 5,
		Jul: 6,
		Aug: 7,
		Sep: 8,
		Okt: 9,
		Nov: 10,
		Dez: 11,
	};
	const constructedDate = new Date();

	monthMap[month] > 10 ? constructedDate.setFullYear("2024") : constructedDate.setFullYear("2025");
	constructedDate.setMonth(monthMap[month]);
	constructedDate.setDate(parseInt(day));
	constructedDate.setHours(parseInt(hours));
	constructedDate.setMinutes(parseInt(minutes));
	constructedDate.setSeconds(0);
	constructedDate.setMilliseconds(0);
	return constructedDate;
}

function Events() {
	const userTags = useAppstate((state) => state.userTags);
	const userEvents = useAppstate((state) => state.userEvents);
	const addUserEvent = useAppstate((state) => state.addUserEvent);
	const removeUserEvent = useAppstate((state) => state.removeUserEvent);

	const dateFilter = useAppstate((state) => state.dateFilter);
	const setDateFilter = useAppstate((state) => state.setDateFilter);
	const resetDateFilter = useAppstate((state) => state.resetDateFilter);

	const [highlightedTags, setHighlightedTags] = useState([]);

	const dateFilteredEvents = useMemo(() => {
		return eventData.events.filter((event) => {
			const eventDate = parseEventDate(event.date);
			return (
				eventDate.getDate() === new Date(dateFilter).getDate() &&
				eventDate.getMonth() === new Date(dateFilter).getMonth() &&
				eventDate.getFullYear() === new Date(dateFilter).getFullYear()
			);
			// return eventDate >= date;
		});
	}, [dateFilter]);

	const tagsAndDateFilteredEvents = useMemo(() => {
		return dateFilteredEvents.filter((event) => {
			return (
				(userTags.length > 0 ? event.tags.some((tag) => userTags.includes(tag)) : true) &&
				(highlightedTags.length > 0 ? event.tags.some((tag) => highlightedTags.includes(tag)) : true)
			);
		});
	}, [userTags, highlightedTags, dateFilteredEvents]);

	var greyIcon = new L.Icon({
		iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png",
		shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	return (
		<div className="w-full h-full p-10 pt-[124px] flex flex-col gap-4 items-center text-black dark:text-white">
			<div className="w-full h-full p-4 rounded-md bg-zinc-200 dark:bg-zinc-800">
				<div className="w-full h-fit flex gap-4 relative">
					<div className="w-full h-fit pb-3 pr-[50px] flex gap-2 overflow-x-scroll">
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
					<div className="absolute top-0 bottom-3 right-[200px] left-0 pointer-events-none bg-gradient-to-r from-90% from-transparent to-zinc-200 dark:to-zinc-800"></div>
					<div className="flex gap-2">
						<input
							type="date"
							className="bg-transparent h-fit mb-3 py-1 px-2 focus:outline-none rounded-md bg-zinc-300 dark:bg-[#313131] dark:text-white"
							value={new Date(dateFilter).toISOString().split("T")[0]}
							onChange={(e) => {
								setDateFilter(new Date(e.target.value));
							}}
						/>
						<button
							className="h-fit px-2 py-1 mb-3 rounded-md bg-zinc-300 dark:bg-[#353535]"
							onClick={resetDateFilter}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.25"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-calendar-sync"
							>
								<path d="M11 10v4h4" />
								<path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
								<path d="M16 2v4" />
								<path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
								<path d="M21 22v-4h-4" />
								<path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
								<path d="M3 10h4" />
								<path d="M8 2v4" />
							</svg>
						</button>
					</div>
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
					{dateFilteredEvents
						.filter((event) => !tagsAndDateFilteredEvents.includes(event))
						.map((event, idx) => {
							return (
								<Marker
									key={idx}
									position={[event.latlon[0], event.latlon[1]]}
									icon={greyIcon}
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
					{tagsAndDateFilteredEvents.map((event, idx) => {
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
