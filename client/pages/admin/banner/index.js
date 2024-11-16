
import React from 'react'
import DashboardLayout from '../dashboard-layout'
import AddBanner from '@/component/dashboard/banner/add-banner'
import withAuth from '@/component/dashboard/PrivateRoutes/ProtectRoutes'

const Index =()=>{
  return (
   <>

    <DashboardLayout>
    <AddBanner/>
    </DashboardLayout>
   </>
   
)
}
export default withAuth(Index);