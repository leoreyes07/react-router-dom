import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";


import { useAuth, canEditBlogPost } from "./auth";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const auth = useAuth();
    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlocg = () => {
        navigate('/blog');
    };

    const canEdit = !auth.user || canEditBlogPost(auth.user, blogpost);

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnToBlocg}>Back</button>
            {canEdit && (
                <button onClick={() => navigate(`/blog/${slug}/edit`)}>Edit</button>
            )}
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    );
}


export { BlogPost };