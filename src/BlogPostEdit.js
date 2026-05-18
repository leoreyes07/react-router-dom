import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";

function BlogPostEdit() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const post = blogdata.find((p) => p.slug === slug);

    const [title, setTitle] = React.useState(post?.title ?? "");
    const [content, setContent] = React.useState(post?.content ?? "");

    if (!post) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post.title = title;
        post.content = content;
        navigate(`/blog/${slug}`);
    };

    const handleCancel = () => {
        navigate(`/blog/${slug}`);
    };

    return (
        <>
            <h2>Edit post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Content:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        rows={6}
                    />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </>
    );
}

export { BlogPostEdit };
