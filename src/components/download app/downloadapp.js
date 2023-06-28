import React from 'react'
import './downloadapp.css';
import { FcFlashOn } from "react-icons/fc";
import groupm from './groupm.png'
import mobile from './mobile2.png'
import playstore from "./playstore.png"
import qrcode from "./qrcode.png"


const downloadapp = () => {
  return (
    <div className="container  bg" >
          <div class="row">
      <div class="col-md-6">
      <div className="container">
    <div class="d-flex justify-content-center " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'50px', marginLeft:'100px',marginBottom:'40px', color:'#000' }}>
   
    {/* <div class="p-2 flex-shrink-1 w-75 p-3 d-flex "style={{fontSize:"  16px", marginTop:'80px'}}> */}
     Enhance your charging experience with Jouls Connect mobile app

      </div>
      <div class="d-flex justify-content-center " style={{fontSize:"  14px",marginTop:'20px', marginLeft:'70px',marginBottom:'40px', color:'#118615' }}>
     
      <ul>
    <li>
      <p class="text font-weight-light" >
      <FcFlashOn fontSize={'50px'} />
       Personalize your charger.
       </p>
       </li>

       <li>  <p  class="text font-weight-light">
      <FcFlashOn  fontSize={'50px'} />
       Different charging modes available.
       </p>
       </li>

       <li>
       <p  class="text font-weight-light">
      <FcFlashOn  fontSize={'50px'} />
       Check charging history and logs.
       </p>
       </li>

       <li>
       <p class="text font-weight-light">
      <FcFlashOn  fontSize={'50px'} />
       Connect with multiple EV's.
       </p>
       </li>

       <li>
       <p class="text font-weight-light">
      <FcFlashOn fontSize={'50px'} />
       Resolve technical issues within app with single click.
       </p>
       </li>
    </ul>

    
  </div>   
    {/* </div> */}
    
  


    </div>
      </div>
      <div class="col-md-6" style={{padding:'0px'}}>
    <div className="container">
    <div class="d-flex justify-content-center " style={{fontSize:"  14px", marginTop:"35px" }}>
     <img src={mobile} alt="Bootstrap" width="80%" height="auto"/>
    </div>
    {/* <img src={mission} style={{width:'70%'}} alt="" /> */}
    </div>
    </div>
    
    </div>
    <div class='container'>
    <div class="row" style={{marginTop:"180px", marginBottom:"100px"}}>
      <div class="col-md-6">
      <div className="container">
      <div class="d-flex justify-content-center " style={{fontSize:"  14px", marginTop:"0px"}}>
      <img src={groupm} alt="Bootstrap" width="90%" height="auto"/>
     
    </div>
    </div>
    </div>
    <div class="col-md-6" style={{marginTop:'30px'}}>
    <div className="container">
    
     
     <div class="d-flex justify-content-left " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'00px', marginLeft:'20px',marginBottom:'30px', color:'#000' }}>
      
     <h1>Jouls Connect EV Charging App</h1>
     
   
    </div>
    <div class="d-flex justify-content-center " style={{  fontWeight:"bold",fontSize:"40px",marginTop:'30px', marginLeft:'10px',marginBottom:'40px', color:'#000' }}>
      <p  style={{fontSize:"17px", fontWeight:'lighter'}}>Introducing Jouls Connect, the state-of-the-art EV charging app designed to provide a seamless user experience with its exceptional user interface. Jouls Connect offers a host of features and functionalities that make it an ideal companion for electric vehicle owners.</p>
    </div>
    <div class="d-flex justify-content-around">
  <img src={playstore} alt="" width="30%" height="25%" style={{marginTop:"30px"}} />
  <img src={qrcode} alt="" width="25%" height="25%" />
</div>
   
    </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default downloadapp
