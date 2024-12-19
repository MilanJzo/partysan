import useAppstate from "../ zuSTATE/appstate";

import genreData from "../../data/genres.json";

function Profile() {
	const user = useAppstate((state) => state.user);
	const setUser = useAppstate((state) => state.setUser);
	const userTags = useAppstate((state) => state.userTags);
	const addUserTag = useAppstate((state) => state.addUserTag);
	const removeUserTag = useAppstate((state) => state.removeUserTag);

	const tags = Object.keys(genreData).forEach((key) => {
		return genreData[key];
	});

	return (
		<div className="w-full h-screen flex flex-col items-center text-black dark:text-white font-serif bg-white dark:bg-zinc-900">
			<div className="rounded-md border border-black dark:border-white px-2 gap-2 flex">
				<input
					id="username"
					type="text"
					className="bg-white dark:bg-zinc-900 border-black dark:border-white focus:outline-none"
					placeholder="Username"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<div className="border border-black dark:border-white" />
				<label htmlFor="username">Username</label>
			</div>

			{tags.map((tag) => {
				return (
					<div
						key={tag.id}
						className="rounded-md border border-black dark:border-white px-2 gap-2 flex"
					>
						<input
							id={tag.id}
							type="checkbox"
							className="bg-white dark:bg-zinc-900 border-black dark:border-white focus:outline-none"
							value={tag.name}
							onChange={(e) => {
								if (e.target.checked) {
									addUserTag(tag.name);
								} else {
									removeUserTag(tag.name);
								}
							}}
						/>
						<div className="border border-black dark:border-white" />
						<label htmlFor={tag.id}>{tag.name}</label>
					</div>
				);
			})}
		</div>
	);
}

export default Profile;
