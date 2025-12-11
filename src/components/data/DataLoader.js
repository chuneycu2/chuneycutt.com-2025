export default async function DataLoader() {

    let domain = 'https://www.chuneycutt.com/';
    let postsEndpoint = 'wp-json/wp/v2/posts/';
    let mediaEndpoint = 'wp-json/wp/v2/media/';

    // WPEngine Cloudflare cache is min-age 600s (10min)
    // Recompile with timestamp to bust cache if needed during development:
    // let timestamp = (new Date()).getTime();
    // url += '?time=' + timestamp;

    /*try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error("Error during fetch operation:", error);
    }*/

    async function fetchAllPosts() {
        const response = await fetch(domain + postsEndpoint);
        return response.json()
    }

    async function getMaxPages() {
        const response = await fetch(domain + mediaEndpoint + '?per_page=100'); // Requesting 1 item to get headers faster
        const totalPages = response.headers.get('X-WP-TotalPages');
        return totalPages;
    }
    async function fetchAllMedia() {
        const totalPages = await getMaxPages();
        let allMedia = [];

        for (let page = 1; page <= totalPages; page++) {
            const response = await fetch(`${domain}${mediaEndpoint}?per_page=100&page=${page}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const mediaPage = await response.json();
            allMedia = allMedia.concat(mediaPage);
        }
        return allMedia;
    }

    async function awaitData() {
        const [pages, media] = await Promise.all([
            fetchAllPosts(),
            fetchAllMedia()
        ]);
        return [pages, media];
    }

    return awaitData();
}