import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


const Root = () => {
  return (
    <>
        <Outlet/>
    </>
  )
}

export default Root