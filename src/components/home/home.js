import React from 'react';
import "./home.css"
import threedvideo from "./esanimthree.mp4"
import Pdf from '../document/home.pdf';
import {FaSolarPanel } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";

import { MdOutlineTimer } from "react-icons/md";
import { TbBatteryCharging2 } from "react-icons/tb";
 import { TbHourglassLow } from "react-icons/tb";
 import { BiSupport } from "react-icons/bi";

function home() {
  return (
    <>
    <div className="topbg" >

</div>

<div class="row" style={{}}>
<div className="container ">
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
    <div class="text-center d-flex "> <h1 style={{fontWeight:"bolder",fontSize:"  60px", marginTop:'60px', fontFamily: 'Aleo'}}>Introducing <span style={{color:"#118615"}}> Eco</span>Spark </h1> 
    </div>
    </div>
    </div>
      <div class="col-md-6">
    
    <div class="d-flex justify-content-center " style={{fontSize:"  14px"}}>
    <div class="text-center flex-shrink-1 w-75 text-justify d-flex justify-content-center "style={{fontSize:"  22px", marginTop:'130px'}}>Eco spark is an efficient & optimised EV charger used for residential and commercial application. It is designed in a way to provide great user experience and maximize the benefits for the user.
    
    </div>
    </div>
      <div class="container" style={{}}>
    <form className="d-flex" role="button" style={{ marginTop:'70px'}}>
             
    
              <a href = {Pdf} target = "_blank" button className="btn btn-outline-success " type="submit" style={{borderRadius:'35px', width:'160px',height:'40px',fontSize:'18px', marginLeft:'120px'}}>
                Brochure
              </a>

              {/* <a href = {Pdf} target = "_blank" button className="btn custom-button btn-outline-success " type="submit" style={{borderRadius:'35px', width:'160px',height:'40px',fontSize:'18px', marginLeft:'90px'}}>
               Specifications
             </a> */}
            </form>
    
  
          

    </div>
    </div>
      
      <div class="col-md-6">
    <div className="container">
    <div class="d-flex justify-content-center " style={{marginTop:"20px",fontSize:"  14px"}}>
     {/* <img src={slider} alt="Bootstrap" width="383" height="299"/> */}
     <video autoPlay loop muted className="bg-vid"><source src={threedvideo} type="video/mp4" /> </video>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container" style={{marginTop:'100px'}}>
    <div class=" row no-gutters asda">
      
      
    <div class="col-md-6  align-self-start">

    <hv-charging-benefit class="">
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <TfiMobile style={{fontSize:'80px',color:''}}> </TfiMobile>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Connect Through</div>
                  <div class="bottom">Jouls Ecotech App</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">Connect EcoSpark through Jouls Ecotech App and use it from anywhere in the world for seamless
                   experience at the ease of fingertips.</div>
                  </div>
                  </hv-charging-benefit>

                  <hv-charging-benefit class="">
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <TbBatteryCharging2 style={{fontSize:'70px'}}> </TbBatteryCharging2>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Automatic Load Management</div>
                  <div class="bottom">With Balance Mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">EcoSpark features advanced power management, automatically adjusting input power to optimize performance without risk of tripping or battery damage.</div></div>
                  </hv-charging-benefit>

                  <hv-charging-benefit class="">
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <BiSupport style={{fontSize:'80px'}}> </BiSupport>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Resolve All Issue Quickly With </div>
                  <div class="bottom">10x Faster Tech Support</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">EcoSpark is consist of built in error and hardware failure detection system that notifies the user beforehand which results in faster error resolution.</div></div>
                  </hv-charging-benefit>
    </div>

    <div class="col-md-6  asda">

    <hv-charging-benefit>
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <MdOutlineTimer style={{fontSize:'80px'}}> </MdOutlineTimer>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Save More With Our</div>
                  <div class="bottom">Schedule mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">Save more by charging at low night rates, Just plug in the charger set the timer and our charger will take care of charging at low tariff.</div>
                  </div>
                  </hv-charging-benefit>

                  <hv-charging-benefit>
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <TbHourglassLow style={{fontSize:'80px'}}> </TbHourglassLow>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Prolong Battery Life</div>
                  <div class="bottom">With Slow Mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">Our innovative slow mode is specifically engineered to extend battery life by intelligently adjusting input power levels.</div>
                  </div>
                  </hv-charging-benefit>

                  <hv-charging-benefit>
      <div class="charger-feature">
        <div class="row no-gutters">
          <div class="col-auto icon-wrapper">
            <FaSolarPanel style={{fontSize:'80px'}}> </FaSolarPanel>
              </div>
              <div class="col-auto content">
                <div class="split-headline">
                  <div class="top">Solar Charging With</div>
                  <div class="bottom">Eco Mode</div>
                  </div>
                  </div>
                  </div>
                  <div class="description">A step towards sustainable world, Charge you car with Solar power. EcoSpark is compatible for solar charging and can be easily installed with all solar panels.</div>
                  </div>
                  </hv-charging-benefit>

      </div>
    </div>
    </div>
</>

)
}

export default home