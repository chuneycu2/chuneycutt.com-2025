import { Element } from 'react-scroll';
import { InView } from 'react-intersection-observer'
import { useState } from "react";

import SectionTitles from "./SectionTitles";
import SectionEntries from "../3-organisms/SectionEntries"
import ProjectLinks from "../5-atoms/ProjectLinks";

export default function Content(props) {
    const { content, media } = props;
    const [activeElementId, setActiveElementId] = useState(null);

    const sections = content.map((sec) => {
        const title = sec.section_title;
        const id = sec.section_title.replace(/\s/g, "");
        return (
            <InView threshold={0} rootMargin={"-32px 0% -90% 0%"} key={id} onChange={(inView, entry) => {
                if (inView) {
                    setActiveElementId(entry.target.id);
                    console.log(entry.target.id);
                }
            }}>
                {({ref, inView}) => (
                    <section id={id} ref={ref} className={inView ? 'active' : 'inactive'}>
                        <Element type={"react-scroll-element"} name={sec.section_title.replace(/\s/g, '')}>
                            <SectionTitles title={sec.section_title} intro={sec.section_intro}/>
                            <div className="section-entries">
                                <SectionEntries content={sec} media={media} key={title} isActive={activeElementId === id} />
                                {sec.links && <ProjectLinks links={sec.links}/>}
                            </div>
                        </Element>
                    </section>
                )}
            </InView>
        )
    });

    return (
        <section className="content col-12 col-md-7 px-0">
            {sections}
        </section>
    )
}