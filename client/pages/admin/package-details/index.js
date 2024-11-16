import React from 'react'
import DashboardLayout from '../dashboard-layout'
import AddPackage from '@/component/dashboard/admin-packages/add-package'
import withAuth from '@/component/dashboard/PrivateRoutes/ProtectRoutes'

const Index =()=>{
  return (
    <>
    <DashboardLayout>
        <AddPackage/>
    </DashboardLayout>
    </>

)
}

export default withAuth(Index);
