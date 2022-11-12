import React from "react";

export default function CreatePostComponent({

    newPost,
    setNewPost,
    onCreatePost
}) {
    return (
        <div>
            <form onSubmit={onCreatePost}>
                <label>Post text</label>
                <input
                    required
                    type="text"
                    value={newPost.text}
                    onChange={({ target }) =>
                        setNewPost({ ...newPost, text: target.value })
                    }
                />
                <label>Post title</label>
                <input
                    required
                    type="text"
                    value={newPost.title}
                    onChange={({ target }) =>
                        setNewPost({ ...newPost, title: target.value })
                    }
                />


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}