import Header from '@components/Header'
import React from 'react'

const InsightsBanner = () => {
    return (
        <>
          <Header />
            <div className="lg:bg-[url('/insights/banner.png')] bg-[url('/insights/bannerMobile.png')] bg-cover lg:h-[80vh] h-[600px] flex flex-col  pb-8">
              
                <h1 className="text-white text-6xl mt-auto ps-16">INSIGHTS</h1>
            </div>

        </>
    )
}

export default InsightsBanner
