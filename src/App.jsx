import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import './assets/scss/styles.scss';

function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <main>
            <div className="container-fluid p-0">
                <Outlet/>
            </div>
        </main>
    )
}

export default App
