import IconEmail from "./icons/IconEmail";
import IconGitHub from "./icons/IconGitHub";
import IconLinkedIn from "./icons/IconLinkedIn";

export default function SocialLinks(props) {
    const { email, github, linkedin } = props.links;
    return (
        <aside className="social-links">
            {linkedin && <a href={linkedin} target="_blank"><IconLinkedIn /></a>}
            {github && <a href={github} target="_blank"><IconGitHub /></a>}
            {email && <a href={email}><IconEmail /></a>}
        </aside>
    )
}