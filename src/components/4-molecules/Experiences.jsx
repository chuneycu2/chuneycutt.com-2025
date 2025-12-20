import ProjectLinks from "../5-atoms/ProjectLinks";
import ProjectSkills from "../5-atoms/ProjectSkills";

export default function Experiences(props) {
    let { job_title, company, years, overview, links, skills, isActive } = props.content;
    return (
        <div className={`entry-container${isActive ? ' active' : ''} row px-0 mx-0`}>
            <div className="years col-12 col-sm-3 col-md-12 col-lg-3 pl-0 pr-0 pr-sm-3">
                {years && <p className="entry-subtitle years uppercase">{years.start_year} — {years.end_year}</p>}
            </div>
            <div className="role-details col-12 col-sm-9 col-md-12 col-lg-9 pr-0">
                {job_title && <h3>{job_title} &#8226; {company}</h3>}
                <p className="entry-description">{overview}</p>
                {links && <ProjectLinks links={links}/>}
                {skills && <ProjectSkills skills={skills}/>}
            </div>
        </div>
    )
}