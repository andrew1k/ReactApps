import React from 'react';
import '../css/post-add-form.css'

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="How u doin"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Add
            </button>
        </form>
    )
}

export default PostAddForm