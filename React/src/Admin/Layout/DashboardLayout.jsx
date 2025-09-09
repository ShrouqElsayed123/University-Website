import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function DashboardLayout() {
  return (
    <>

      <div className="flex h-screen bg-gray-100">

        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}

          <Navbar />

          {/* Content */}
          <main className="flex-1 p-6 overflow-y-auto bg-white m-5">
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </>
  )
}
