import React, { Component } from 'react';

import FriendsList from './FriendsList';
import { friendsService } from './../../services/FriendsService';

class FriendsPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.loadPosts()
    }

    async loadPosts() {
        try {
            const friends = await friendsService.fetchFriends()
            this.setState({ friends });
        } catch (error) {

        }
    }

    render() {
        const { friends } = this.state;
        return (<FriendsList friends={friends} />)
    }
}

export default FriendsPage;
