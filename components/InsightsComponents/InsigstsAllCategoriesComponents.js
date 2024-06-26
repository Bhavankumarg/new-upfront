'use client'
import React, { useState } from 'react';
import StoriesComponents from './StoriesComponents';
import CaseStudiesComponents from './CaseStudiesComponents';
import AllBlogsComponents from './AllBlogsComponents';
import BlogComponents from './BlogComponents';
import NewsComponents from './NewsComponents';
import { insightsTabs } from '@utils/data';

const InsigstsAllCategoriesComponents = () => {
    const [activeTab, setActiveTab] = useState('Case Studies');
    const [visibleItems, setVisibleItems] = useState(8); // State to manage number of visible items

    const getActiveTab = (tab) => {
        setActiveTab(tab);
        setVisibleItems(8); // Reset visible items when tab changes
    };

    const getTabClass = (tab) => {
        return tab === activeTab
            ? 'py-2 px-4 text-white text-2xl bg-black'
            : 'py-2 px-4 text-gray-500 hover:text-gray-700 text-2xl bg-[#E8E8E8]';
    };

    const getContentClass = (tab) => {
        return tab === activeTab ? 'p-4' : 'hidden p-4';
    };

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <>
            <div className="hidden lg:block sticky top-0 bg-white shadow-md z-50">
                <ul className="flex px-10 gap-10 py-5 pb-0" id="tabs">
                    {insightsTabs.map((tabObj, index) => (
                        <li key={index}>
                            <button
                                className={getTabClass(tabObj.tab)}
                                onClick={() => getActiveTab(tabObj.tab)}
                            >
                                {tabObj.tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="tab-contents" className='hidden lg:block'>
                <div className={getContentClass('Stories')}>
                    <StoriesComponents />
                </div>
                <div className={getContentClass('Case Studies')}>
                    <CaseStudiesComponents />
                </div>
                <div className={getContentClass('Blogs')}>
                    <BlogComponents />
                </div>
                <div className={getContentClass('News and Publications')}>
                    <NewsComponents />
                </div>
                {/* <div className={getContentClass('All')}>
                    <AllBlogsComponents />
                </div> */}
            </div>
           
        </>
    );
};

export default InsigstsAllCategoriesComponents;


// {activeTab !== 'All' && (
//     <div className="text-center mt-7">
//         {/* Conditionally render Load More button */}
//         <button
//             onClick={handleLoadMore}
//             className="bg-customLightGray border border-customGrayMd px-8 py-3 mb-10 mt-5"
//         >
//             Load More
//         </button>
//     </div>
// )}