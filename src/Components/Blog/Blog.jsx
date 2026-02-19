import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./Blog.css";

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const Blog = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "homepagePost",
                    order: "-sys.publishedAt",
                    limit: 1,
                    include: 2,
                });

                if (response.items.length > 0) {
                    setPost(response.items[0]);
                }
            } catch (error) {
                console.error("Error fetching blog post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, []);

    if (loading) {
        return (
            <section className="db-blog">
                <p>Loading latest update...</p>
            </section>
        );
    }

    if (!post) {
        return (
            <section className="db-blog">
                <p>No updates available.</p>
            </section>
        );
    }

    const { title, content, image } = post.fields;
    const imageUrl = post.fields.image?.fields?.file?.url
        ? `https:${post.fields.image.fields.file.url}`
        : "";

    return (
        <section className="db-blog">
            <div className="db-blog__container">
                <div className="db-blog__image-wrapper">
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={image.fields.title || title}
                            className="db-blog__image"
                        />
                    )}
                </div>

                <div className="db-blog__content">
                    <h2 className="db-blog__title">{title}</h2>
                    <div className="db-blog__text">
                        {documentToReactComponents(content)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
