import useAppstate from "../ zuSTATE/appstate";
import Button from "../components/Button";

function Home() {
	const userEvents = useAppstate((state) => state.userEvents);
	const removeUserEvent = useAppstate((state) => state.removeUserEvent);

	return (
		<div className="w-full h-fit p-[40px] pt-[10px] md:pt-[40px] flex flex-col gap-4 items-center text-black dark:text-white">
			{userEvents.length > 0
				? userEvents.map((event, idx) => {
						return (
							<div
								key={idx}
								className="w-full h-fit p-4 flex flex-col gap-2 rounded-md bg-zinc-200 dark:bg-zinc-800"
							>
								<h1 className="text-2xl font-serif">{event.title}</h1>
								<p>{event.location}</p>
								<p>{event.place}</p>
								<div className="rounded-md flex justify-between gap-2">
									<p>{event.date}</p>
									<p>{event.price}</p>
								</div>
								<div className="w-full flex justify-end gap-2">
									<Button
										danger
										action={() => {
											removeUserEvent(event);
										}}
									>
										Cancel Event
									</Button>
								</div>
							</div>
						);
				  })
				: "This is a list of events you're participating in. It's currently empty, book some events!"}
		</div>
	);
}

export default Home;
