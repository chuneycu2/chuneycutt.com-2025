import Home from './1-pages/Home.jsx'
import Projects from './1-pages/Projects.jsx'
import { Routes, Route } from 'react-router-dom';

export default function Main() {
    return (
        <main>
            <div className="container-fluid p-0">
                <Home/>
            </div>
        </main>
    )
}