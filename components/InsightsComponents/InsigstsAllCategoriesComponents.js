'use client'
import React, { useState } from 'react'
import StoriesComponents from './StoriesComponents';
import CaseStudiesComponents from './CaseStudiesComponents';
import AllBlogsComponents from './AllBlogsComponents';
import BlogComponents from './BlogComponents';
import NewsComponents from './NewsComponents';

const InsigstsAllCategoriesComponents = () => {
    const [activeTab, setActiveTab] = useState(1);

    const getTabClass = (tabIndex) => {
        return tabIndex === activeTab
            ? 'bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold'
            : 'bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold';
    };

    const getContentClass = (tabIndex) => {
        return tabIndex === activeTab ? 'p-4' : 'hidden p-4';
    };


    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <ul className="flex border-b" id="tabs">
                    <li className="-mb-px mr-1">
                        <button
                            className={getTabClass(1)}
                            onClick={() => setActiveTab(1)}
                        >
                            Stories
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={getTabClass(2)}
                            onClick={() => setActiveTab(2)}
                        >
                            Case Studies
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={getTabClass(3)}
                            onClick={() => setActiveTab(3)}
                        >
                            Blogs
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={getTabClass(4)}
                            onClick={() => setActiveTab(4)}
                        >
                            News And Publications
                        </button>
                    </li>
                    <li className="mr-1">
                        <button
                            className={getTabClass(5)}
                            onClick={() => setActiveTab(5)}
                        >
                            All
                        </button>
                    </li>

                </ul>
                <div id="tab-contents">
                    <div className={getContentClass(1)}>
                        <StoriesComponents />
                    </div>
                    <div className={getContentClass(2)}>

                        <CaseStudiesComponents />
                    </div>
                    <div className={getContentClass(3)}>
                        <BlogComponents />
                    </div>
                    <div className={getContentClass(4)}>
                        <NewsComponents />
                    </div>
                    <div className={getContentClass(5)}>
                        <AllBlogsComponents />
                    </div>
                </div>
            </div>

        </>
    )
}

export default InsigstsAllCategoriesComponents
