import React, { useState } from "react";
import CreatePostComponent from "../components/CreatePostComponent";
import PostsService from "../services/PostsService";
import { useHistory } from "react-router-dom";

const defaultPost = {
    title: "",
    text: "",

};

export default function AddPost() {

    const history = useHistory();
    const [newPost, setNewPost] = useState(defaultPost);

    const handlerCreateNewPost = async (e) => {
        e.preventDefault();
        const newPostResponse = await PostsService.add(newPost);
        if (newPostResponse.status === 200) {
            history.push("/posts");
        }

    };

    return (

        <div>
            <CreatePostComponent
            newPost={newPost}
            setNewPost={setNewPost}
            onCreatePost={handlerCreateNewPost}
            />
        </div>
    )
}