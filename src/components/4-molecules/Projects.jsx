import { Link } from "react-router-dom";
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";


export default function Projects(props) {
    const { content, media } = props;
    const projectImage = media?.filter((img) => {
        if (img.id === content?.project_image) {
            return img;
        }
    });

    return (
        <div className="entry-container">
            <Link to={content.project_link}>
                <div className="row p-0 m-0">
                    <div className="project-thumbnail col-12 col-sm-3 pl-0 pr-0 pr-sm-3">
                        <img src={media && projectImage[0].source_url} alt={media && projectImage[0].alt_text}/>
                    </div>
                    <div className="project-info col-12 col-sm-9 px-0">
                        <h3>{content.project_title}</h3>
                        <p className="entry-subtitle">{content.project_company}</p>
                        <p className="entry-description">{content.project_intro}</p>
                        {/*<ProjectLinks links={content.links}/>*/}
                    </div>
                </div>
            </Link>
        </div>
    )
}