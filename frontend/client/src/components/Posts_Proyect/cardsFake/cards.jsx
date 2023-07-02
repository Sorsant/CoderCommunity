import React from "react";
import PosteoCard from "./card";
import { useSelector } from "react-redux";

const PosteoCards = () => {
    const posteos = useSelector((state) => state.home.posts);


    if (!Array.isArray(posteos)) {
        return <div>No hay posteos disponibles.</div>;
    }

    return (
        <div>
            {posteos.map((post) => (
                <div key={post.id}>
                    <PosteoCard
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        created={post.created}
                    />
                </div>
            ))}
        </div>
    );
};

export default PosteoCards;