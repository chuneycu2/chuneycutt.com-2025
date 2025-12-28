import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import DataAndMediaLoader from "./components/data/DataAndMediaLoader.js";

import App from "./App";
import Home from "./components/1-pages/Home";
import Projects from "./components/1-pages/Projects";
import LoadingElement from "./components/ux/LoadingElement";
import ErrorElement from "./components/ux/ErrorElement";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		loader: DataAndMediaLoader,
		id: "root-data",
		HydrateFallback: LoadingElement,
		ErrorBoundary: ErrorElement,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "projects",
				Component: Projects,
			},
			{
				path: "projects/:slug",
				Component: Home,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
