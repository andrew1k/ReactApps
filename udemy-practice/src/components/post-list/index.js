import React from 'react';
import '../css/post-list.css'
import '../css/index.css'

import PostListItem from '../post-list-item'

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}

export default PostList 