import React from 'react';

import classes from './FriendsItem.module.css';

const FriendsItem = (props) => {

    return (
        <div>
            <div className={classes.person}>
                <div className={classes.photo}>
                    <img
                        src="https://stregasystem.com/img/users/user.png"
                        alt=""/>
                </div>
                <div className={classes.person_name}>
                    {props.name}
                </div>
            </div>
        </div>
    );
}

export default FriendsItem;
