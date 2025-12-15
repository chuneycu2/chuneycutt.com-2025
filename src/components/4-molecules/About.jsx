import React from "react";
import DOMPurify from 'dompurify';

import ProjectLinks from "../5-atoms/ProjectLinks.jsx";
import CyrusPic from "../../assets/img/cyrus-pic.jpg";

export default function About(props) {
    const content = props.content;
    //console.log(content);

    // Get the WYSIWYG content and sanitize it for good measure
    const editorContent = content.entries?.map((entry) => (
        entry.wysiwyg
    ))
    const cleanHTML = DOMPurify.sanitize(editorContent);

    const bioCard = content.about_me ?
        <div className="bio-card d-flex pb-4">
            <img src={CyrusPic} alt="Cyrus Huneycutt headshot"/>
            <div className="bio">
                <h3>Cyrus Huneycutt</h3>
                <p className="entry-subtitle">{content.about_me.location}</p>
                <ProjectLinks links={content.about_me.links}/>
            </div>
        </div>
        : '';


    return (
        <div className="entry-container">
            {bioCard && bioCard}
            <div className="section-content" dangerouslySetInnerHTML={{__html: cleanHTML}}>
            </div>
        </div>
    )
}