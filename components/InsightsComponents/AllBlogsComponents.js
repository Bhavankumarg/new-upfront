'use client'

import React, { useEffect, useState } from 'react'
import ConfigData from '../../config'

const AllBlogsComponents = () => {
    const siteUrl = ConfigData.wpApiUrl;
    const serverUrl = ConfigData.SERVER;
    const [data, setData] = useState([]); // Initialize data state with an empty array

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?_embed&production_mode[]=${serverUrl}`);
                const data = await response.json();
                setData(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [siteUrl, serverUrl]);

    return (
        <div>
            <div className='d-flex flex-lg-row flex-column bg-black'>
                {data.length > 0 ? ( // Check if data has items
                    data.map((post) => (
                        <div className="iv-cards col-lg-4 d-flex flex-column p-3" key={post.id}>
                            <div className="card-body text-white d-flex flex-column justify-content-between">
                                <h5 className="card-title">
                                    {post.title.rendered}
                                </h5>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-white'>Loading...</div> // Render loading message while data is being fetched
                )}
            </div>
        </div>
    )
}

export default AllBlogsComponents
