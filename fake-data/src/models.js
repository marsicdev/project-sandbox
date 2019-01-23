import faker from 'faker'
import shortid from 'shortid'

import { USERS_COUNT, POSTS_COUNT, POSTS_TYPES } from "./constants";
import { assignRandomId, randomIndex } from './helpers';

// shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

export class Comment {
    constructor(commentId) {
        this.id = commentId
        this.cid = shortid.generate()
        this.postId = assignRandomId(POSTS_COUNT)
        this.userId = assignRandomId(USERS_COUNT)
        this.createdAt = new Date().toISOString()
        this.isPublic = faker.random.boolean()
        this.body = faker.lorem.text()
    }
}

export class Post {
    constructor(postId) {
        this.id = postId
        this.pid = shortid.generate()
        this.userId = assignRandomId(USERS_COUNT)
        this.createdAt = new Date().toISOString()
        this.isPublic = faker.random.boolean()
        this.type = POSTS_TYPES[randomIndex(0, POSTS_TYPES.length)]
        switch (this.type) {
            case 'text':
                this.text = faker.lorem.paragraph()
                break
            case 'image':
                this.imageUrl = `${faker.random.image()}/${postId}`
                break
            case 'video':
                this.videoUrl = `${faker.random.image()}/${postId}`
                break
        }
    }
}

class About {
    constructor() {
        this.bio = faker.lorem.sentence()
        this.job = faker.name.jobTitle()
        this.countryCode = faker.address.countryCode()
    }
}

export class User {
    constructor(userId) {
        this.id = userId
        this.uid = shortid.generate()
        this.email = faker.internet.email().toLowerCase()
        this.passwordHash = "$2b$10$2sSurtgPtphFKQcrmSoDWOxzsa3eq4bj/CoZSIY47KX46.iCzd4Dm"
        this.createdAt = new Date().toISOString()
        this.avatarUrl = faker.image.avatar()
        this.isPublic = faker.random.boolean()
        this.about = new About()
        this.name = {
            prefix: faker.name.prefix(),
            first: faker.name.firstName(),
            last: faker.name.lastName()
        }
    }
}
