export default function DataParser(data) {
    console.log(data);
    // location.pathname "/" maps to slug 'home'
    // location.pathname "/projects" maps to slug 'projects'
    // location.pathname "/projects/*" maps to slugs 'projects/*' (see regex)
    return data
}