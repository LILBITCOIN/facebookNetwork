import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>

            <img alt='avatar' src="https://stregasystem.com/img/users/user.png" />

            <span>{props.message}</span>
            <div>
                {props.like} Likes
            </div>
        </div>

    );
};

export default Post;
