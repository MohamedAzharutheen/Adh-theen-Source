import AboutBlog from '@/component/about-us/about-blog'
import HeroSec from '@/component/about-us/hero-sec'
import Layout from '@/component/layout'
import NextSeoModel from '@/component/nextseomodel';
import React from 'react'

export default function Aboutus() {
// SEO SCHEMA METHOD
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ath-Theen Hajj and Umrah Services",
      "foundingDate": "2008",
      "description": "Providing Hajj and Umrah services with personalized and affordable packages since 2008."
    }
  };


  return (
    <>
     <NextSeoModel
        title="About Us | Hajj and Umrah Experts Since 2008"
        description="Learn about our mission to provide seamless Hajj and Umrah experiences since 2008. Trusted by thousands of pilgrims for our dedication and spiritual expertise."
        url="https://www.yourwebsite.com/about"
        keywords="Best Hajj services,Best Umrah experts, pilgrimage organizers,Best Islamic travel,best umrah affordable package"
        imageUrl="https://www.yourwebsite.com/images/about-us.jpg"
        schema={schema}
      />
    <Layout>
        <HeroSec/>
        <AboutBlog/>
    </Layout>
    </>
  )
}
