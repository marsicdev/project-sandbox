import { FETCH_POSTS } from "../actions";
import _ from 'lodash';

export default function (state = {}, { type, payload }) {
    switch (type) {
        case FETCH_POSTS:
            // we get: [post1, post2] we need {1: post1, 2: post2}
            // console.log(payload.data);
            return _.mapKeys(payload.data, 'id');
        default:
            return state;
    }
}