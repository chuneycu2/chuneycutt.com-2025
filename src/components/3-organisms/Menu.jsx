import { Link } from 'react-scroll';

export default function Menu(props) {

    const sections  = props.sections;
    const menuItems = sections?.map((sec) => (
        <li key={sec.section_title}>
            {/* see options: https://www.npmjs.com/package/react-scroll */}
            <Link
                activeClass="active"
                spy={true}
                to={sec.section_title.replace(/\s/g, '')}
                smooth={true}
                duration={500}
                offset={-40}
                spyThrottle={200}>
                {sec.section_title}
            </Link>
        </li>
    ));
    const mobileMenuItems = sections?.map((sec) => (
        <option key={sec.section_title} value={sec.section_title.replace(/\s/g, '')}>
            {sec.section_title}
        </option>
    ));

    if (sections) {
        return (
            <>
                <nav className="menu-container d-none d-sm-block">
                    <ul className="menu">
                        {menuItems}
                    </ul>
                </nav>
                <select id="mobileMenu" className="menu-mobile-container d-block d-sm-none">
                    {mobileMenuItems}
                </select>
            </>
        )
    }
}