import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import { useAuth, canEditBlogPost } from "./auth";

function BlogEditRoute({ children }) {
    const { slug } = useParams();
    const auth = useAuth();
    const post = blogdata.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }
    if (!canEditBlogPost(auth.user, post)) {
        return <Navigate to={`/blog/${slug}`} replace />;
    }
    return children;
}

export { BlogEditRoute };
