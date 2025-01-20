import Layout from '@/component/layout'
import NextSeoModel from '@/component/nextseomodel'
import ServiceCards from '@/component/services/service-cards'
import React from 'react'

export default function Index() {
  return (
    <>
    <NextSeoModel
        title="Best Tours and Travels | Aththeen"
        description="Discover top-notch travel packages and unforgettable experiences with Aththeen. Plan your next adventure effortlessly with our trusted services."
        url="https://www.aththeen.in"
        keywords="best hajj service in tamilnadu,best umrah service in chennai,best umrah service in tamilnadu,best umrah service in tamilnadu,best umrah service in tamilnadu,cheapest month for umrah,cheapest umrah package from india, Umrah services, affordable pilgrimage packages, Islamic travel services, trusted pilgrimage organizers"
        imageUrl="/assets/images/banner/hajj.png"/>
    <Layout>
    <div className="mt40">
            <h1 className="tac fs-33 mfs-24 green-clr fwb ">Best Tours <span className="logo-clr fwb"> and </span> Travels Services</h1>
            <p className='tac fs-19 mfs-16 '>Explore the world with Aththeen, your trusted partner for exceptional tours and travel experiences. Let us craft unforgettable journeys just for you</p>
           </div>
        <ServiceCards/>
    </Layout>
  
    
    </>
  )
}
