import useAppstate from "../ zuSTATE/appstate";

function Home() {
	const userEvents = useAppstate((state) => state.userEvents);

	return (
		<div>
			<div>
				{userEvents.length
					? userEvents.map((event) => {
							<p>{event.title}</p>;
					  })
					: "Book some events!"}
			</div>
		</div>
	);
}

export default Home;
