import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container '>
            <Header/>
            <Outlet/>
        </main>

        <div className='p-5 text-center bg-gray-800 mt-10'>
    Made with ❤️ by @omsaidesaii
        </div>
    </div>
  )
}

export default AppLayout