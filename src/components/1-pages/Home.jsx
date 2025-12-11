import { useLoaderData } from "react-router";

import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import DataParser from "../data/DataParser.js";
import MediaParser from "../data/MediaParser.js";
import Footnote from "../3-organisms/Footnotes.jsx";

export default function Home() {

    // Fetch page and media data
    const data  = useLoaderData();
    const pageData = DataParser(data[0]);
    const mediaData = MediaParser(data);
    //const mediaData = data[1];
    console.log(mediaData);
    const thisPage = pageData[0].acf;

    return (
        <div className="container-main home row m-0">
            <Sidebar name={thisPage.name} title={thisPage.title} intro={thisPage.intro} content={thisPage.components_react} />
            <Content content={thisPage.components_react} />
            <Footnote footnotes={thisPage.footnotes}/>
        </div>
    )
}