import React from 'react';
import style from "./PostDetails.module.css"

const PostDetails = ({postDetails}) => {

    const {id, userId, title, body} = postDetails;

    return (
        <div className={style.postDetailsBlock}>
            <h3 className={style.postNumber}>Post number: {id} </h3>
            <h3 className={style.postNumber}>User number: {userId} </h3>
            <h1 className={style.postTitle}>{title}</h1>
            <div className={style.postText}>{body}</div>
            <div className={style.imageBlock}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src="https://www.prostir.ua/wp-content/uploads/2020/10/social-1206603_1920.png" alt="photo" className={style.postImage}/>
            </div>
        </div>
    );
};

export default PostDetails;
