import { get } from "../shared/apiService";
import { POSTS_BASE_URL } from "../shared/constants";

export default class PostService {
    
    fetchPosts() {
        return get(`${POSTS_BASE_URL}/posts?_limit=15`)
    }

    fetchPostDetails(id) {
        return get(`${POSTS_BASE_URL}/posts/${id}`)
    }

}

export const postService = new PostService()
