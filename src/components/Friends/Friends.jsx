import React from 'react';

import './Friends.module.css';
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
    console.log(props);
    let friend = props.friend.map((friend, index) => <FriendsItem key={index} name={friend.name}/>);

    return (
        <div>
            <span>
                {friend}
            </span>

        </div>
    );
}

export default Friends;
