import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {postService} from "../../services/postService";

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (

        <div>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/> )}
            </div>
        </div>
    );
};

export default Posts;