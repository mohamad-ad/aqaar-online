import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import quickPayIcon from '../imgs/Inquiry.png'

const EServices = () => {
  return (
    <>
        <Navbar page={'E-Services'} prevPage={''}/>
        <div className='card-container'>
          <Card url={'/iRNOC'} title="Initial Registration NOC" icon={quickPayIcon} />
          <Card url={'/fRNOC'} title="Final Registration NOC" icon={quickPayIcon} />
          <Card url={'/sTNOC'} title="Sales Transfare NOC" icon={quickPayIcon} />
        </div>
    </>
  )
}

export default EServices