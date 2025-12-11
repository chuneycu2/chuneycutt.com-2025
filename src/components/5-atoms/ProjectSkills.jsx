export default function ProjectSkills(props) {
    const skills = props.skills;
    const skillsMap = skills.map((skill) => {
        if (skill.link !== "") {
            return (
                <div key={skills.id} className="skill">
                    <a href={skill.link} target="_blank">{skill.skill}</a>
                </div>
            )
        } else {
            return <div key={skills.id} className="skill">{skill.skill}</div>
        }
    })

    return (
        <div className="project-skills d-flex">
            {skillsMap}
        </div>
    )
}