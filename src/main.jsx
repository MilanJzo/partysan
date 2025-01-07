import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import "@fontsource/big-shoulders-text";
import "@fontsource/el-messiri";

import "./index.css";
import PageLayout from "./layouts/PageLayout";
import Events from "./pages/Events";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route element={<PageLayout />}>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/events"
						element={<Events />}
					/>
					<Route
						path="/info"
						element={<Info />}
					/>
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
				</Route>
			</Routes>
		</Router>
	</StrictMode>
);
