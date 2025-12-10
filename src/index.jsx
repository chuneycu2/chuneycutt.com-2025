import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router";

import App from './App'
import Home from "./components/1-pages/Home";
import Projects from "./components/1-pages/Projects";
import homeLoader from "./components/data/homeLoader.js";

const router = createBrowserRouter([
    {
        path: "*",
        element: <App/>,
        children: [
            { index: true, Component: Home },
            { path: "projects", Component: Projects }
        ],
        loader: homeLoader,
        HydrateFallback: () => <div></div>,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
