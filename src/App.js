import React, {useEffect, useState} from 'react';
import {postService} from "./services/postService";
import PostForm from "./components/PostContainer/PostForm";
import Posts from "./components/PostContainer/Posts";

const App = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            <PostForm setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default App;