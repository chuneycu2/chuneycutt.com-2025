import { useLocation } from 'react-router-dom';

/**
 * Parses incoming page data and returns all relevant objects for the current page URL
 */
export default function DataParser(data) {
    // location.pathname "/" maps to slug 'home'
    // location.pathname "/projects" maps to slug 'projects'
    // location.pathname "/projects/*" maps to slugs 'projects/*' (see regex)

    const location = useLocation();
    let projectMatch = '^\\/projects\\/.*';
    let projectPaths = location.pathname.split('/').filter(Boolean);
    let projectSlug = projectPaths.pop();

    // Return page data based on location
    if (location.pathname === '/')
        return data.filter(page => page.slug === 'home');
    if (location.pathname === '/projects')
        return data.filter(page => page.slug === 'projects');
    if (location.pathname.match(projectMatch))
        return data.filter(page => page.slug === projectSlug);
}