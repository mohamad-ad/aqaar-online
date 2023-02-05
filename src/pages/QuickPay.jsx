import React, { useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import quickPayIcon from '../imgs/Inquiry.png'
import maintenaceIcon from '../imgs/maintenance.png'
import coolingIcon from '../imgs/cooling.png'


const QuickPay = () => {

  return (
    <>
        <Navbar page={'Quick Pay'} prevPage={''}/>
        <div className='card-container'>
          <Card url={'/maintenancecharge'} title="Maintenance Charge" icon={maintenaceIcon} />
          <Card url={'/coolingbill'} title="Cooling Bill" icon={coolingIcon} />
        </div>
    </>
  )
}

export default QuickPay