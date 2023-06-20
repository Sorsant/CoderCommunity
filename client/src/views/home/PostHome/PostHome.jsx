import React, { useState } from 'react';
import validate from './validatePost';
import { useDispatch } from 'react-redux';
import { addHomePosts } from '../../components/Redux/action';


const Posteohome = () => {
    const dispatch = useDispatch();

    const [post, setPost] = useState < FormPost > ({
        image: '',
        title: '',
        description: '',
    });

    const [errors, setErrors] = useState < ErroresRegister > ({
        image: '',
        title: '',
        description: '',
    });

    const handleOnChange = () => {
        const { name, value } = event.target;

        setPost({
            ...post,
            [name]: value,
        });

        const updatedErrors = validate({
            ...post,
            [name]: value,
        });

        setErrors(updatedErrors);
    };

    const handleOnSubmit = () => {
        event.preventDefault();
        dispatch(addHomePosts(post));
    };

    return (
        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <div></div>
                        <label>Title</label>
                        <input
                            onChange={handleOnChange}
                            value={post.title}
                            type="text"
                            name="title"
                            placeholder="Your title"
                        />
                        {errors.title && <span>{errors.title}</span>}

                        <label>Description</label>
                        <input
                            onChange={handleOnChange}
                            value={post.description}
                            type="text"
                            name="description"
                            placeholder=""
                        />
                        {errors.description && <span>{errors.description}</span>}

                        <label>Image</label>
                        <input
                            onChange={handleOnChange}
                            value={post.image}
                            type="text"
                            name="image"
                        />
                        {errors.image && <span>{errors.image}</span>}

                        <button
                            disabled={
                                !post.title ||
                                !post.description ||
                                !!errors.title ||
                                !!errors.description
                            }
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Posteohome;