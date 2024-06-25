"use client";

import React, { useEffect, useState } from "react";
import ConfigData from "../../config";
import Link from "next/link";
import { Button } from "flowbite-react";

const BlogComponents = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 3;
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  return (
    <div>
      <h2 className="text-6xl py-10 lg:px-10">BLOGS</h2>

      <hr className="px-10" />
      <ul className="flex flex-wrap gap-6 mt-8 container mx-auto">
        {data.length > 0 ? (
          data.map((post) => (
            <li key={post.id} className="lg:border-s lg:border-black mb-10">
              <div className="ps-3 w-80">
                <div className="relative">
                  {post.acf && post.acf.thumbnail_image && (
                    <img
                      src={post.acf.thumbnail_image.url}
                      alt={post.title.rendered}
                      className="w-100"
                      height={220}
                    />
                  )}
                  <button
                    type="button"
                    className="text-white text-xl absolute top-0 start-0 w-32 text-center font-normal bg-gray-800/75 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-1 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    BLOG
                  </button>
                  {/* <p className="absolute top-0 text-sm bg-black/70 text-white px-3 py-1">
                    {post.badge}
                  </p> */}
                </div>
                {post.acf && post.acf.date && (
                  <p className="card-date mb-0 mt-3">
                    {new Date(post.acf.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}
                <div className="lg:h-[250px] flex flex-col justify-between">
                  <span
                    className="text-[#4A4A4A] text-xl mt-3"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post["excerpt"]["rendered"],
                    }}
                    className="fs-5 mb-3 m-height mt-3 p-1 post-content"
                  ></div>
                  <Button className="text-black hover:bg-black bg-[#E8E8E8] border border-[#909090] hover:text-white rounded-none mt-5 w-40 mb-5">
                    <Link
                      href={`/insights/blog/${post.slug}`}
                      className="px-7 "
                    >
                      Read more
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="text-center text-3xl">Loading...</div>
        )}
      </ul>
    </div>
  );
};

export default BlogComponents;
