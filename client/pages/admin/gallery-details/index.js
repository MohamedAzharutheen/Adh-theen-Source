import React from 'react'
import DashboardLayout from '../dashboard-layout'
import AddGallery from '@/component/dashboard/addmin-gallery/add-gallery'
import withAuth from '@/component/dashboard/PrivateRoutes/ProtectRoutes'

const Index = ()=> {
  return (
   <>
   <DashboardLayout>
    <section>
        <AddGallery/>
    </section>
   </DashboardLayout>
   </>

)
}
export default withAuth(Index);
