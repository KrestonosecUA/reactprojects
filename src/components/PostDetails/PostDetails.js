import React from 'react';
import style from "./PostDetails.module.css"

const PostDetails = ({postDetails}) => {

    const {id, title, body} = postDetails;

    return (
        <div className={style.postDetailsBlock}>
            <h3 className={style.postNumber}>Number: {id}</h3>
            <h1 className={style.postTitle}>{title}</h1>
            <div className={style.postText}>{body}</div>
        </div>
    );
};

export default PostDetails;
