import React from 'react'
import { Outlet } from 'react-router'
import SideBar from "../components/common/Sidebar/index"
function CMSlayoout() {
  return (
    <div className='flex gap-10'>

      <section className='right-0 left-0'>
        <SideBar/>
      </section>
      
      <main className='py-4 '>
        <Outlet/>
      </main>
        
    </div>
  )
}

export default CMSlayoout