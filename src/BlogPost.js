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
        <div className="page-container">
            <h2>{blogpost.title}</h2>
            
            <div className="actions">
                <button type="button" onClick={returnToBlocg}>Back</button>
                {canEdit && (
                    <button onClick={() => navigate(`/blog/${slug}/edit`)}>Edit</button>
                )}
            </div>

            <p>{blogpost.content}</p>
            <p style={{ color: 'var(--primary)' }}>By {blogpost.author}</p>
        </div>
    );
}


export { BlogPost };