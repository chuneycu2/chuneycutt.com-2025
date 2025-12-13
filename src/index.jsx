import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import { Suspense } from "react";
import DataAndMediaLoader from "./components/data/DataAndMediaLoader.js";

import App from './App'
import Home from "./components/1-pages/Home";
import Projects from "./components/1-pages/Projects";
import LoadingElement from "./components/ux/LoadingElement";

const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,
        children: [
            {
                index: true,
                Component: Home,
                loader: DataAndMediaLoader,
                HydrateFallback: LoadingElement
            },
            {
                path: "projects",
                Component: Projects,
                loader: DataAndMediaLoader,
                HydrateFallback: () => <div></div>,
            },
            {
                path: "projects/:slug",
                Component: Home,
                loader: DataAndMediaLoader,
                HydrateFallback: () => <div></div>,
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
