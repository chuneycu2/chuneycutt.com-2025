import ProjectSkills from "../5-atoms/ProjectSkills";
import IconDevelopment from "../5-atoms/icons/iconDevelopment.jsx";
import IconDesign from "../5-atoms/icons/IconDesign.jsx";
import IconAnalytics from "../5-atoms/icons/IconAnalytics.jsx";
import IconGear from "../5-atoms/icons/iconGear.jsx";

export default function SkillsAndTools(props) {
    console.log(props);
    const { id, icon, discipline, type } = props.content;

    const getIcon = (category) => {
        if (category === "development") return <IconDevelopment type={"top-icon"} />
        if (category === "design") return <IconDesign type={"top-icon"} />
        if (category === "analytics") return <IconAnalytics type={"top-icon"} />
        if (category === "other") return <IconGear type={"top-icon"} />
    }

    const categorySkills = type.map((section) => (
        <div key={section.skills_type} className="skills-category">
            <p className="entry-subtitle">{section.skills_type}</p>
            <ProjectSkills skills={section.skills} />
        </div>
    ))

    return (
        <div className={`entry-container icon-${icon}`}>
            <div className="accent-line"></div>
            {getIcon(icon)}
            <h3>{discipline}</h3>
            <div className="skills-container">
                {categorySkills}
            </div>
        </div>
    )
}