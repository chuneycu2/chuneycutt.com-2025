import React from 'react';
import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import {useLoaderData} from "react-router";
import DataParser from "../data/DataParser.js";

export default function Projects() {
    // Fetch page and media data
    const data  = useLoaderData();
    const pageData = DataParser(data[0]);
    const mediaData = data[1];
    //console.log(mediaData);
    //const thisPage = pageData[0].acf; // get only ACF data here
    return (
        <div className="container-main projects row m-0">
            <h2>Projects</h2>
        </div>
    )
}