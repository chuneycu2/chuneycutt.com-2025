import Experiences from "../4-molecules/Experiences";
import SkillsAndTools from "../4-molecules/SkillsAndTools";
import Projects from "../4-molecules/Projects";
import About from "../4-molecules/About";
import Accolades from "../4-molecules/Accolades";

export default function SectionEntries(props) {
    const { acf_fc_layout, entries } = props.content;
    const isActive = props.isActive;
    const media = props.media;
    const type = acf_fc_layout.replace(/_/g, "-");

    const entryTemplate = (content) => {
        if (type === 'experience') return (<Experiences content={content} isActive={isActive} />)
        if (type === 'skills-and-tools') return (<SkillsAndTools content={content} isActive={isActive} />)
        if (type === 'projects') return (<Projects content={content} media={media} isActive={isActive} />)
        if (type === 'about' || type === 'overview-section') return (<About content={props.content} isActive={isActive} />)
        if (type === 'accolades') return (<Accolades content={content} media={media} isActive={isActive} />)
    }

    const sectionEntries = entries?.map(entry => (
        <article key={entry.id} className={`section-entry ${type} ${isActive ? "active" : "inactive"}`}>
            {entryTemplate(entry)}
        </article>
    ))

    return (
        <>{sectionEntries}</>
    )
}