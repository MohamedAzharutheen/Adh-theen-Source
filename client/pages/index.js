import CategorySection from '@/component/category/category-section'
import Faqs from '@/component/faq'
import Banner from '@/component/home/banner'
import ValuableClient from '@/component/home/experinced-guidence'
import HajjGateway from '@/component/home/hajj-gateway'
import Journey from '@/component/home/journey'
import Layout from '@/component/layout'
import NextSeoModel from '@/component/nextseomodel'
import OurAchivement from '@/component/our-achivement'
import PackageCard from '@/component/packages/package-card'
import ServiceCards from '@/component/services/service-cards'
import Testimonial from '@/component/slider/testmonial'
import WeFeelHappy from '@/component/we-feel-happy'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Index({banner}) {
  const FaqQus = [
    {
        qus:" What services does Ath-Theen Hajj offer for Hajj and Umrah pilgrims?",
        ans:"Ath-Theen Hajj provides a range of services for Hajj and Umrah pilgrims, including visa assistance, flight bookings, accommodation in Makkah and Madinah, transportation, guided tours, and religious guidance to ensure a smooth and fulfilling pilgrimage experience."
    },
    {
        qus:"What types of Hajj and Umrah packages are available?",
        ans:"We offer various Hajj and Umrah packages tailored to meet different needs, such as economy, standard, and premium packages. Each package includes accommodation, meals, transportation, and other essential services, with variations based on comfort, duration, and proximity to the holy sites."
    },
    {
        qus:"How can I book a Hajj or Umrah package with Ath-Theen Hajj?",
        ans:"You can easily book your Hajj or Umrah package through our website, by contacting our customer service team, or by visiting our office. Our team will assist you with the necessary documentation, payments, and travel arrangements."
    },
    {
        qus:"Do you provide group or private Umrah packages?",
        ans:"Yes, we offer both group and private Umrah packages. Group packages allow you to travel with other pilgrims, while private packages offer personalized itineraries, tailored services, and more flexibility in terms of accommodation and transport options."
    },
    {
        qus:" What health and safety measures are in place for pilgrims during the trip?",
        ans:"Ath-Theen Hajj prioritizes the health and safety of all pilgrims by following guidelines from health authorities. We ensure that accommodations are sanitized, transportation is safe, and all required health precautions are followed. We also provide medical assistance during the journey, if needed."
    },
  ]
const [isVisible,setIsVisible]=useState(false);

useEffect(()=>{
  const timer = setTimeout(()=>{
    setIsVisible(true);
  },5000);
  return () => clearTimeout(timer);
},[]);

  // Close the card when the cancel icon is clicked
  const closeCard = () => setIsVisible(false);

// SEO Schema Method

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ath-Theen Hajj and Umrah Services",
  "url": "https://www.yourwebsite.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-1234567890",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": ["en", "ta"]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",            // Average rating value
    "reviewCount": "1292"             // Total number of ratings
  }
}
  return (
    <>
       <NextSeoModel
        title="Best Hajj and Umrah Services | Affordable Packages"
        description="Experience a seamless Hajj and Umrah journey with our trusted and affordable pilgrimage services. Discover tailored packages and personalized support for every step of your spiritual trip."
        url="https://www.yourwebsite.com/"
        keywords="best hajj service in tamilnadu,best umrah service in chennai,best umrah service in tamilnadu,best umrah service in tamilnadu,best umrah service in tamilnadu,cheapest month for umrah,cheapest umrah package from india, Umrah services, affordable pilgrimage packages, Islamic travel services, trusted pilgrimage organizers"
        imageUrl="https://www.yourwebsite.com/images/hajj-umrah-banner.jpg"
        schema={schema}
      />
    <Layout>
      <Banner/>
      <WeFeelHappy/>
      <ServiceCards/>
      <HajjGateway/>
      <ValuableClient />
      <CategorySection/>
      <OurAchivement/>
      <Journey/>
      <Testimonial/>
     <Faqs FaqQus={FaqQus}/>
      {isVisible &&

      <PackageCard banner={banner} closeCard={closeCard}/>

    }
      </Layout>
    </>
  )
}
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.url}/api/banner/get-banner`);
    const data = await res.json();

    console.log('Fetched banner data:', data); // Log the fetched data

    if (!data || data.length === 0) {
      return {
        props:{
        banner: null,
      }
    }
    }

    return {
      props: {
        banner: data[0], // Pass the first banner object as props
      },
    };
  } catch (error) {
    console.error('Error fetching banner data:', error); // Log any errors
    return {
      props: {
        banner: null, // Return null on error
      },
    };
  }
}
