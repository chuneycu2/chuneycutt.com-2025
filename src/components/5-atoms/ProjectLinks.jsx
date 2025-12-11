import IconNewPage from "./icons/IconNewPage.jsx";
import IconSamePage from "./icons/IconSamePage.jsx";

export default function ProjectLinks(props) {
    const links = props.links;
    console.log(links);

    const getIcon = (target) => {
        if (target === "_blank") return <IconNewPage/>
        else return <IconSamePage/>
    }

    const linkItems = links.map(link => (
        <div key={link.link_text} className={`${link.link_target} link`}>
            <a className="pr-3" href={link.link_url} target={link.link_target}>
                {getIcon(link.link_target)}
                {link.link_text}
            </a>
        </div>
    ))


    return (
        <div className="project-links">
            {linkItems}
            {/*Programmatically return <Link/> router elements for internal link
            <div className="link external">
                <IconNewPage />
                <a className="pr-3" href="/" target="_blank">instaclustr.com</a>
            </div>
            <div className="link internal">
                <IconSamePage/>
                <a className="pr-3" href="/projects" target="_self">spot.io</a>
            </div>*/}
        </div>
    )
}