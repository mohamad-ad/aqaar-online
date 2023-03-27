import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import quickPayIcon from '../imgs/bill.png'

const EServices = () => {
  return (
    <>
        <Navbar page={'Service Request'} prevPage={''}/>
        <div className='card-container'>
          <Card url={'/iRNOC'} title="Sales Services" icon={quickPayIcon} />
          <Card url={'/fRNOC'} title="Lease Services" icon={quickPayIcon} />
          {/* <Card url={'/sTNOC'} title="Sales Transfare NOC" icon={quickPayIcon} /> */}
        </div>
    </>
  )
}

export default EServices