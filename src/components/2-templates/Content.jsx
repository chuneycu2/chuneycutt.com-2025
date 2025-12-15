import { Element } from 'react-scroll';

import SectionTitles from "./SectionTitles.jsx";
import SectionEntries from "../3-organisms/SectionEntries.jsx"
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

export default function Content(props) {
    const { content, media } = props;

    const sections = content.map((sec) => {
        const title = sec.section_title;
        const id = sec.section_title.replace(/\s/g, "");
        return (
            <section id={id} className="" key={title}>
                <Element type={"react-scroll-element"} name={sec.section_title.replace(/\s/g, '')}>
                    <SectionTitles title={sec.section_title} intro={sec.section_intro}/>
                    <div className="section-entries">
                        <SectionEntries content={sec} media={media}/>
                        {sec.links && <ProjectLinks links={sec.links}/>}
                    </div>
                </Element>
            </section>
        )
    });

    return (
        <section className="content col-12 col-md-7 px-0">
            <div id="observerTop"></div>
            {sections}
        </section>
    )
}