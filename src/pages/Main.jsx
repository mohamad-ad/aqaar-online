import React from "react";
import quickPayIcon from '../imgs/Inquiry.png'
import eServicesIcon from '../imgs/service-charge.png'

import Card from "../components/Card";


const Main = () => {
  return (
    <div className="card-container">
      <Card url={'/quickpay'} icon={quickPayIcon} title="Quick Pay" body={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}/>
      <Card url={'/eservices'} icon={eServicesIcon} title="E-Services"/>
    </div>
  );
};

export default Main;
