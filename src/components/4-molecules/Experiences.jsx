import ProjectLinks from "../5-atoms/ProjectLinks";
import ProjectSkills from "../5-atoms/ProjectSkills";

export default function Experiences(props) {
    let { job_title, company, years, overview, links, skills } = props.content;
    return (
        <div className="entry-container">
            {/* programmatically map through props to render each experience */}
            <h3>{job_title} &#8226; {company}</h3>
            <p className="entry-subtitle uppercase">{years.start_year} — {years.end_year}</p>
            <p className="entry-description">{overview}</p>
            {links && <ProjectLinks links={links} />}
            {skills && <ProjectSkills skills={skills}/>}
        </div>
    )
}