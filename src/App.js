import React, {useEffect, useState} from 'react';
import CommentForm from "./components/CommentForm";
import Comments from "./components/Comments";
import {commentService} from "./services/commentService";

const App = () => {

    const [comments, setComments] = useState();

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            <CommentForm/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export default App;