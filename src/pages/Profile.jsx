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
	const removeUserTag = useAppstate((state) => state.removeUserTag);
	const removeAllUserTags = useAppstate((state) => state.removeAllUserTags);

	const tags = useMemo(() => {
		let tags = [];
		Object.keys(genreData).forEach((key) => {
			genreData[key].forEach((tag) => {
				if (!tags.find((entry) => entry === tag) && !userTags.find((entry) => entry === tag)) {
					tags.push(tag);
				}
			});
		});
		return tags;
	}, [userTags]);

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
					text={"LogOut"}
					action={() => {
						removeAllUserTags();
						logout();
					}}
				></Button>
			</div>

			<div className="h-full flex flex-col gap-4 lg:flex-row lg:overflow-hidden">
				<div className="w-full p-4 flex flex-col gap-2 items-center rounded-md bg-zinc-200 dark:bg-zinc-800 relative">
					<h1 className="w-fit h-fit text-2xl">Your Tags</h1>
					<Button
						style="absolute top-4 right-4"
						text={"clear Tags"}
						action={() => {
							removeAllUserTags();
						}}
					></Button>
					<div className="w-fit flex flex-wrap gap-2 justify-center md:overflow-scroll">
						{userTags.map((tag, idx) => {
							return (
								<Tag
									key={idx}
									text={tag}
									action={() => {
										removeUserTag(tag);
									}}
									remove
								></Tag>
							);
						})}
					</div>
				</div>

				<div className="w-full p-4 flex flex-col gap-2 items-center rounded-md bg-zinc-200 dark:bg-zinc-800">
					<h1 className="w-fit h-fit text-2xl">All Tags</h1>
					<div className="w-fit flex flex-wrap gap-2 justify-center md:overflow-scroll">
						{tags.map((tag, idx) => {
							return (
								<Tag
									key={idx}
									text={tag}
									action={() => {
										addUserTag(tag);
									}}
								></Tag>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
