import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const rootURL = "https://jsonplaceholder.typicode.com";

export function fetchPosts() {
    const postsURL = `${rootURL}/posts`;
    const request = axios.get(postsURL);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
