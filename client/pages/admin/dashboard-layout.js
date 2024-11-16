import PannelNavbar from '@/component/dashboard/panel-navbar'
import React from 'react'


export default function DashboardLayout({children}) {
  return (
   <>
  <PannelNavbar/>
   {children}
   </>
  )
}
