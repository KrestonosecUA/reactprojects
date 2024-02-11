import React from 'react';
import style from "./Post.module.css"

const Post = ({post, getPost}) => {

    const {id, title} = post;

    return (
        <div className={style.blockPost}>
            <h3 className={style.postNumber}>Post number: {id}</h3>
            <h1 className={style.postTitle}>{title}</h1>
            <div className={style.buttonBlock}>
                <button className={style.button} onClick={() => getPost(post)}>Details</button>
            </div>

        </div>
    );
};

export default Post;