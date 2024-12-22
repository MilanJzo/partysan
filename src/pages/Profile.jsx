import { useMemo } from "react";
import useAppstate from "../ zuSTATE/appstate";

import genreData from "../../data/genres.json";

import Tag from "../components/Tag";
import Button from "../components/Button";

function Profile() {
	const user = useAppstate((state) => state.user);
	const logout = useAppstate((state) => state.logOut);
	const setUser = useAppstate((state) => state.setUser);
	const userTags = useAppstate((state) => state.userTags);
	const addUserTag = useAppstate((state) => state.addUserTag);
	const setUserTags = useAppstate((state) => state.setUserTags);
	const removeUserTag = useAppstate((state) => state.removeUserTag);
	const removeAllUserTags = useAppstate((state) => state.removeAllUserTags);
	const removeAllUserEvents = useAppstate((state) => state.removeAllUserEvents);

	const tags = useMemo(() => {
		let tags = [];
		Object.keys(genreData).forEach((key) => {
			genreData[key].forEach((tag) => {
				if (!tags.find((entry) => entry === tag)) {
					tags.push(tag);
				}
			});
		});
		return tags;
	}, []);

	return (
		<div className="w-full page-content-h p-10 flex flex-col gap-4 items-center text-black dark:text-white font-serif">
			<div className="rounded-md w-full h-fit py-2 px-4 flex gap-2 bg-zinc-200 dark:bg-zinc-800">
				<label htmlFor="username">Username:</label>
				<input
					id="username"
					type="text"
					className="w-full bg-transparent border-b border-black dark:border-white focus:outline-none font-bold"
					placeholder="e.g. John Doe"
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<Button
					danger
					text={"LogOut"}
					action={() => {
						removeAllUserTags();
						removeAllUserEvents();
						logout();
					}}
				></Button>
			</div>

			<div className="h-full flex flex-col gap-4 lg:flex-row lg:overflow-hidden">
				<div className="w-full pt-4 flex flex-col gap-2 items-center rounded-md relative">
					<h1 className="w-fit h-fit text-2xl">Tell us what you like</h1>
					<div className="absolute top-4 right-4 flex gap-2">
						<Button
							style={userTags.length > 0 ? "" : "opacity-50"}
							text={"clear Tags"}
							action={() => {
								removeAllUserTags();
							}}
							// disabled={userTags.length > 0}
						></Button>

						<Button
							style={userTags.length >= tags.length ? "opacity-50" : ""}
							text={"select All"}
							action={() => {
								let newTags = [];
								tags.forEach((tag) => {
									if (!userTags.includes(tag)) {
										newTags.push(tag);
									}
								});
								setUserTags([...userTags, ...newTags]);
							}}
							// disabled={userTags.length >= tags.length}
						></Button>
					</div>

					<div className="w-full pr-4 flex flex-wrap gap-4 justify-center md:overflow-scroll">
						{Object.keys(genreData).map((key, idx) => {
							let categoryEntries = genreData[key];

							return (
								<>
									{categoryEntries.length > 0 ? (
										<div
											key={idx}
											className="w-full p-4 flex flex-wrap gap-2 rounded-md bg-zinc-200 dark:bg-zinc-800"
										>
											<h2 className="w-full text-xl">{key}</h2>
											{categoryEntries.map((tag, idx) => {
												return (
													<Tag
														key={idx}
														text={tag}
														highlight={userTags.includes(tag)}
														action={() => {
															userTags.includes(tag) ? removeUserTag(tag) : addUserTag(tag);
														}}
													></Tag>
												);
											})}
										</div>
									) : (
										<></>
									)}
								</>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
