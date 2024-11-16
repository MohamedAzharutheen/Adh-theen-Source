import React from 'react'
import Navbar from './header-section/navbar'
import TopHeader from './header-section/top-header'
import Footers from './footers'
import EnquiryBtn from './header-section/enquiry-btn'
import FlyingCntBtn from './flying-cnt-btn'
import Subscripe from './subscripe'

export default function Layout({children}) {
  return (
   <>
   <TopHeader/>
   <Navbar/>
   <FlyingCntBtn/>
   <EnquiryBtn/>
   {children}
   <Subscripe/>
   <Footers/>
   </>
  )
}
