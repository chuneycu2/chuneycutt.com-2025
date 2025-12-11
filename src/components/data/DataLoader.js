export default async function DataLoader() {

    // WPEngine Cloudflare cache is min-age 600s (10min)
    // Recompile endpoints with a timestamp to bust cache if needed during development:
    // let timestamp = (new Date()).getTime();
    // ...endpoint += '?time=' + timestamp;

    let domain = 'https://www.chuneycutt.com/';
    let postsEndpoint = 'wp-json/wp/v2/posts/';

    async function fetchAllPosts() {
        try {
            const response = await fetch(domain + postsEndpoint);
            if (!response.ok) { throw new Error(`DataLoader response error: ${response.status}`); }
            return await response.json();
        } catch (error) {
            console.error('DataLoader fetch error:', error.message);
        }
    }

    return fetchAllPosts();
}