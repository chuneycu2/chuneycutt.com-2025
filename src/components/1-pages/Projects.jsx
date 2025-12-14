import React from 'react';
import { useLoaderData } from "react-router";
import DataParser from "../data/DataParser.js";

import ProjectCard from "../4-molecules/ProjectCard";
import ProjectLinks from "../5-atoms/ProjectLinks";

export default function Projects() {
    // Fetch page and media data
    const data = useLoaderData();
    const pageData = DataParser(data[0].posts);
    const mediaData = data[0].media;
    const thisPage = pageData[0].acf;
    //console.log(thisPage);

    return (
        <div className="container-main project-archive m-0">
            <section className="row d-flex align-items-top p-0 m-0">
                <div className="section-title col-12 col-md-5 col-lg-4 pl-0 pr-4 pb-3 pb-md-0">
                    <h1 className="pb-1 h2">{thisPage.title ? thisPage.title : 'Project Archive'}</h1>
                    <ProjectLinks links={[
                        {
                            link_text : "Cyrus Huneycutt",
                            link_url : "/",
                            link_target : "_self"
                        }
                    ]} />
                </div>
                {thisPage.intro ? thisPage.intro :
                    <div className="section-intro col-12 col-md-7 col-lg-8 px-0 pt-2">
                        <p>{thisPage.intro ? thisPage.intro : ''}</p>
                    </div>
                }
            </section>
            <section className="project-cards row px-0 m-0">
                <ProjectCard content={thisPage.components_react} media={mediaData} />
            </section>
        </div>
    )
}