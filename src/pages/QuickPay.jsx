import React, { useEffect } from 'react'
// import { Outlet } from 'react-router-dom'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
// import quickPayIcon from '../imgs/bill.png'
import maintenaceIcon from '../imgs/maintenance.png'
import coolingIcon from '../imgs/cooling.png'
import connectionIcon from '../imgs/connection.png'
import generatorIcon from '../imgs/generator.png'
import nocIcon from '../imgs/noc.png'


const QuickPay = () => {

  return (
    <>
        <Navbar page={'Quick Pay'} prevPage={''}/>
        <div className='card-container'>
          <Card url={'/coolingbill'} title="Cooling" icon={coolingIcon} body={''} />
          <Card url={'/maintenancecharge'} title="Maintenance" icon={maintenaceIcon} />
          <Card url={'/coolingbill'} title="Connection Fees" icon={connectionIcon} />
          <Card url={'/coolingbill'} title="Generator Bill" icon={generatorIcon} />
          <Card url={'/coolingbill'} title="NOC Fee" icon={nocIcon} />
        </div>
    </>
  )
}

export default QuickPay