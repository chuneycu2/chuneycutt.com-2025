import Experiences from "../4-molecules/Experiences";
import SkillsAndTools from "../4-molecules/SkillsAndTools";
import Projects from "../4-molecules/Projects";
import About from "../4-molecules/About";
import Accolades from "../4-molecules/Accolades";

export default function SectionEntries(props) {
    const content = props.content;
    const type = content.acf_fc_layout.replace(/_/g, "-");
    console.log(content);

    const entryTemplate = (content) => {
        if (type === 'experience') return (<Experiences content={content} />)
        if (type === 'skills-and-tools') return (<SkillsAndTools content={content} />)
        if (type === 'projects') return (<Projects content={content} />)
        if (type === 'about') return (<About content={content} />)
        if (type === 'accolades') return (<Accolades content={content} />)
    }

    const entries = content.entries.map((entry) => (
        <article className={`section-entry ${type}`}>
            {entryTemplate(entry)}
        </article>
    ))

    return (
        <>{entries}</>
    )
}