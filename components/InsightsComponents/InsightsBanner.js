import Header from '@components/Header'
import React from 'react'

const InsightsBanner = () => {
    return (
        <>
            <div className="bg-[url('/insights/banner.png')] bg-cover h-[60vh] flex flex-col ps-16 pb-8">
                <Header />
                <h1 className="text-white text-6xl mt-auto">INSIGHTS</h1>
            </div>

        </>
    )
}

export default InsightsBanner
