"use client";

import React, { useEffect, useState } from "react";
import ConfigData from "../../config";
import Link from "next/link";
import { Button } from "flowbite-react";

const NewsComponents = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 5;
  const [data, setData] = useState([]); // Initialize data state with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  return (
    <div>
      <h2 className="lg:text-6xl text-3xl py-10 lg:px-10">
        NEWS AND PUBLICATIONS
      </h2>
      <hr className="px-10" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 container mx-auto">
        {data.length > 0 ? (
          data.map((post) => (
            <li key={post.id} className="border-red-600 border mb-10">
              <div className="w-full">
                {/* <div className="relative">
                  {post.acf && post.acf.thumbnail_image && (
                    <img
                      src={post.acf.thumbnail_image.url}
                      alt={post.title.rendered}
                      className="w-full"
                      height={220}
                    />
                  )}
                  <button
                    type="button"
                    className="text-white text-xl absolute top-0 start-0 w-32 text-center font-normal bg-gray-800/75 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 px-1 py-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    NEWS
                  </button>
                </div> */}
                {/* {post.acf && post.acf.date && (
                  <p className="card-date mb-0 mt-3">
                    {new Date(post.acf.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )} */}
                <div className="flex-col h-48 flex justify-between">
                  <div className="mx-3 mt-5 p-1">
                    <span
                      className="text-black font-bold"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </div>

                  <div>
                    <Button className="text-black w-52 hover:bg-black bg-[#E8E8E8] border border-[#909090] hover:text-white rounded-none mt-5 mx-3 mb-5">
                      <Link
                        target="_blank"
                        href={`${post.acf.news_and_publications_url}`}
                        className="px-7"
                      >
                        Read more
                      </Link>
                    </Button>
                  </div>
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

export default NewsComponents;
