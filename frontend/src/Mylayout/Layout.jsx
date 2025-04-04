import React from 'react'
import HeadersMain from './HeadersMain'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <HeadersMain />
        <Outlet />
    </div>
  )
}

export default Layout