export default async function DataAndMediaLoader() {

    // WPEngine Cloudflare cache is min-age 600s (10min)
    // Recompile endpoints with a timestamp to bust cache if needed during development:
    let timestamp = (new Date()).getTime();
    // ...endpoint += '?time=' + timestamp;

    let domain = 'https://www.chuneycutt.com/';
    let postsEndpoint = 'wp-json/wp/v2/posts/';
    let mediaEndpoint = 'wp-json/wp/v2/media/';

    // use post data to fetch related media files
    async function fetchPostMedia(data) {

        // get the last two entries, which are the Home and Projects pages
        const homeAndProjects = data.slice(-2);
        let imageIDs = [];

        // check for specific component types that contain images across both pages' data
        homeAndProjects.map((page) => {
            let components = page.acf.components_react;
            let projects = null;
            let accolades = null;
            Object.values(components)?.forEach((component) => {
                if (component.acf_fc_layout === 'projects') {
                    projects = component.entries;
                    projects.map((project) => {
                        project.project_image && imageIDs.push(project.project_image);
                    })
                }
                if (component.acf_fc_layout === 'accolades') {
                    accolades = component.entries;
                    accolades.map((accolade) => {
                        accolade.attribution_image && imageIDs.push(accolade.attribution_image);
                    })
                }
            })
        })

        // fetch data for each imageID sequentially and then return the responses together
        const fetchMedia = async (ids) => {
            try {
                const fetchPromises = ids.map(id => fetch(domain + mediaEndpoint + id + '?time=' + timestamp));
                const responses = await Promise.all(fetchPromises);
                // convert all responses to JSON (another set of promises)
                const data = await Promise.all(responses.map(res => {
                    if (!res.ok) throw new Error("Fetch failed");
                    return res.json();
                }));
                return data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        return fetchMedia(imageIDs);
    }

    // await fetch results from posts, then media in sequence
    async function fetchPostsAndMedia() {
        const posts = await fetch(domain + postsEndpoint);
        const postData = await posts.json();
        const mediaData = await fetchPostMedia(postData);

        return { posts: postData, media: mediaData }
    }

    async function awaitData() {
        const pages = await Promise.all([
            fetchPostsAndMedia()
        ]);
        console.log('data fetched');
        return pages;
    }

    return awaitData();
}