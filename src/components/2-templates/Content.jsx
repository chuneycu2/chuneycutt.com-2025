import SectionTitles from "./SectionTitles.jsx";
import SectionEntries from "../3-organisms/SectionEntries.jsx"
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

export default function Content(props) {
    const content = props.content;
    console.log(content);

    const sections = content.map(sec => (
        <section key={sec.section_title} id={sec.section_title.replace(/\s/g, '')}>
            <SectionTitles title={sec.section_title} intro={sec.section_intro} />
            <div className="section-entries">
                <SectionEntries content={sec} />
                {sec.links && <ProjectLinks links={sec.links}/>}
            </div>
        </section>
    ));

    return (
        <section className="content col-12 col-md-7 px-0">
            {sections}
        </section>
    )
}