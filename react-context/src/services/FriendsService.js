import { get } from "../shared/apiService";
import { FRIENDS_BASE_URL } from "../shared/constants";

export default class FriendsService {
    fetchFriends() {
        return get(FRIENDS_BASE_URL)
    }
};

export const friendsService = new FriendsService()
