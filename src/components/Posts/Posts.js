import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../services/postService";
import PostDetails from "../PostDetails/PostDetails";
import style from "./Posts.module.css"

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getPost = (post) => {
        setPostDetails(post)
    }


    return (
        <div className={style.blocks}>
            <div className={style.posts}>
                {posts.map(post => <Post key={post.id} post={post} getPost={getPost}/>)}
            </div>
            <div className={style.postDetails }>
                {postDetails && <PostDetails postDetails={postDetails}/>}
            </div>

        </div>
    );
};

export default Posts;