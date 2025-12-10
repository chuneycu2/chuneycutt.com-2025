import Titles from "./Titles.jsx";
import Menu from "../3-organisms/Menu.jsx";

export default function Sidebar(props) {
    let {title, intro, footnote} = props;
    return (
        <section className="sidebar col-12 col-md-5 d-flex flex-column pl-0 pr-0 pr-md-5">
            <Titles title={title} intro={intro} footnote={footnote} />
            <Menu />
        </section>
    )
}