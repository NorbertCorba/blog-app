import React, { useState, useEffect } from 'react'
import PostsService from '../services/PostsService';

export default function AppPosts() {

    const [posts,setPosts] = useState();

    const handleGetPosts = async () => {
        const posts = await PostsService.getAll();
        setPosts(posts);
    };

    useEffect(() => {
        handleGetPosts();
    }, []);

    return (
        <div>
            {posts && posts.map((post) => (
            <div key={post.id}>
                <p><strong>Post Title: </strong>{post.title}</p>
                <p><strong>Post content: </strong> {post.text}</p>
                <hr color="red"></hr>
                <hr color="red"></hr>
            </div>
                ))}
        </div>
    );
}
