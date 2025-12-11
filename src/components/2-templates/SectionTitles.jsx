export default function SectionTitles(props) {
    const {title, intro} = props
    return (
        <div className="title-container section pb-5">
            <h2>{title}</h2>
            <p className="section-intro">{intro}</p>
        </div>
    )
}