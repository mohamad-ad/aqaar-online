import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// const quickPayServivces = [
//   {id:"coolingBill", name: 'Cooling Bill'},
//   {id:"maintenanceCharge", name: 'Maintenance Charge'}
// ]
// const EServices = [
//   {id:'iRNOC', name: 'Initial Registration NOC'},
//   {id:'fRNOC', name: 'Final Registration NOC'},
//   {id:'sTNOC', name: 'Sales Trnasfare Registration NOC'}
// ]


  // const [selectedService, setSelectedService] = useState('');
  // const selectService = (e)=>{
  //   setSelectedService(e.target.id);
  //   if(type=='quickpay'){
  //     navigate(`/quickpay/${e.target.id}`)
  //   }
  //   if(type=='eServices'){
  //     navigate(`/eServices/${e.target.id}`)
  //   }
  // }
  // const NavMenu=()=>{
  //   if(type==='quickpay'){
  //     return quickPayServivces.map(service=>(
  //       <span key={service.id} id={service.id} className={`nav-item ${(service.id === selectedService)? 'nav-item-selected':""}`} onClick={(e)=>selectService(e)}> {service.name} </span>
  //     ))
  //   }
  //   if(type === 'eServices'){
  //     return EServices.map(service=>(
  //       <span key={service.id} id={service.id} className={`nav-item ${(service.id === selectedService)? 'nav-item-selected':""}`} onClick={(e)=>selectService(e)}> {service.name} </span>
  //     ))
  //   }
  // }
  // console.log(selectedService)
  
const Navbar = ({page, prevPage}) => {
  const navigate = useNavigate();

  return (
    <div className='nav-bar'>
      <div className="back-btn" onClick={()=>navigate(`/${prevPage}`)} ><i className="fa fa-arrow-left fa-x" aria-hidden="true"></i></div>
        <div style={{marginRight:'80px', flexGrow:1, color:'white', fontWeight:'bold', textAlign:'center'}}>{page}</div>
    </div>
  )
}

export default Navbar