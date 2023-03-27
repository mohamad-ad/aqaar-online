import React from "react";
import billIcon from '../imgs/bill.png'
import paymentIcon from '../imgs/payment.png'

import Card from "../components/Card";
import Navbar from "../components/Navbar";


const Main = () => {
  return (
    <>
    <div className="nav-bar">
      <div className="nav-bar-container">
        <a className="nav-bar-brand" href="">
          <span class="text-eservices"> AQAAR E-Services </span>
        </a>

        <img
          height="25"
          src="https://online.aqaar.com/Images/payment-logo.png"
          alt="Payment options"
        />
      </div>
    </div>
    <div className="card-container">
      <Card url={'/quickpay'} icon={paymentIcon} title="Quick Pay" body={""}/>
      <Card url={'/eservices'} icon={billIcon} title="Service Request"/>
    </div>
    </>
  );
};

export default Main;
