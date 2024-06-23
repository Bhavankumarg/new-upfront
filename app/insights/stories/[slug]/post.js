'use client'

import React, { useState, useEffect } from 'react';
import { CiCircleChevRight } from "react-icons/ci";
import Link from 'next/link';
import ConfigData from '../../../../config'; // Adjust the import path according to your project structure

const Posts = ({ slug }) => {
    const siteUrl = ConfigData.wpApiUrl;
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.length > 0) {
                        setPost(data[0]); // Assuming slug fetches a single post
                    } else {
                        console.error('Post not found:', slug);
                    }
                } else {
                    console.error('Failed to fetch post:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [siteUrl, slug]);

    return (
        <div className="w-80 custom-container bg-black">
            {post ? (
                <div className="d-flex flex-column">
                    <div className='d-flex flex-row align-items-center mb-3 flex-nowrap'>
                        <p>
                            <Link href="/blogs">
                                <span className='fs-6 text-white mb-0 px-1'>Blogs</span>
                            </Link>
                            <CiCircleChevRight fill='white' />
                            <span className='fs-6 text-decoration-none text-white mb-0' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </p>
                    </div>
                    <div className='text-white' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
            ) : (
                <div className='text-white'>Loading...</div>
            )}
        </div>
    );
};

export default Posts;
