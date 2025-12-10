export default function Titles(props) {
    {/* merge SectionTitles.jsx into this component */}
    return (
        <div className="title-container">
            {/* programmatically add title info based on page URL */}
            <h1>{props.title}</h1>
            <h2>Front End Developer</h2>
            <p className="intro">
                {props.intro}
            </p>
        </div>
    )
}