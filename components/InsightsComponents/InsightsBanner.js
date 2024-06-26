import Header from '@components/Header'
import React from 'react'

const InsightsBanner = () => {
    return (
        <>
            <div className="lg:bg-[url('/insights/banner.png')] bg-[url('/insights/bannerMobile.png')] bg-cover lg:h-[80vh] h-[600px] flex flex-col ps-16 pb-8">
                <Header />
                <h1 className="text-white text-6xl mt-auto">INSIGHTS</h1>
            </div>

        </>
    )
}

export default InsightsBanner
