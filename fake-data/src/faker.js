import { User, Post, Comment } from "./models";
import { USERS_COUNT, POSTS_COUNT, COMMENTS_COUNT } from "./constants";

export const generateJsonData = () => {

    const users = makeData(User, USERS_COUNT)
    const comments = makeData(Comment, COMMENTS_COUNT)
    const posts = makeData(Post, POSTS_COUNT)

    const data = {
        users,
        comments,
        posts
    }

    return JSON.stringify(data)
}

const makeData = (Model, count) => {
    const dataArray = []
    
    for (let index = 0; index < count; index++) {
        const item = new Model(index + 1);
        dataArray.push(item)
    }
    
    return dataArray
}
